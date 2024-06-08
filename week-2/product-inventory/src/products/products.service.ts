import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { contains } from 'class-validator';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { name, type, price, stock } = createProductDto;

    // Check if the product already exists
    const existingProduct = await this.prisma.product.findUnique({
      where: {
        name,
      },
    });

    if (existingProduct) {
      // Update the existing product's stock
      return this.prisma.product.update({
        where: {
          id: existingProduct.id,
        },
        data: {
          stock: {
            increment: stock || 1,
          },
          price,
        },
      });
    } else {
      // Create a new product
      return this.prisma.product.create({
        data: {
          name,
          type,
          price,
          stock: 1,
        },
      });
    }
  }
  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
