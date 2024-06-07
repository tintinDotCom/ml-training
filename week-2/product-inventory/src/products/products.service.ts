import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async findByType(query: CreateProductDto) {
    const { productType } = query;
    let where: Prisma.ProductsWhereInput = {};

    if (productType) {
      where = {
        productType: {
          contains: productType,
        },
      };
    }

    return await this.prisma.products.findMany({ where });
  }
  async create(createProductDto: CreateProductDto) {
    try {
      const existingProduct = await this.prisma.products.findFirst({
        where: {
          productName: createProductDto.productName,
        },
      });

      if (existingProduct) {
        return this.prisma.products.update({
          where: {
            productId: existingProduct.productId,
          },
          data: {
            unitPrice: createProductDto.unitPrice,
          },
        });
      } else {
        return this.prisma.products.create({
          data: {
            productName: createProductDto.productName,
            productType: createProductDto.productType,
            unitPrice: createProductDto.unitPrice,
          },
        });
      }
    } catch (error) {
      throw error;
    }
  }

  // findAll() {
  //   return this.prisma.products.findMany();
  // }

  findItemById(productId: number) {
    return this.prisma.products.findUnique({
      where: {
        productId,
      },
    });
  }

  async update(productId: number, updateProductsDto: UpdateProductDto) {
    try {
      const updatedProduct = await this.prisma.products.update({
        where: {
          productId,
        },
        data: {
          productName: updateProductsDto.productName,
          productType: updateProductsDto.productType,
        },
      });

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

  remove(productId: number) {
    return this.prisma.products.delete({
      where: {
        productId,
      },
    });
  }
}
