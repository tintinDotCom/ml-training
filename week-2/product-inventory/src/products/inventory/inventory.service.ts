import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventoryDto: CreateInventoryDto) {
    const product = await this.getProduct(createInventoryDto.productId);
    if (!product) {
      throw new Error(
        `Product with ID ${createInventoryDto.productId} not found.`,
      );
    }

    const existingInventory = await this.getInventoryByProductId(
      createInventoryDto.productId,
    );
    if (existingInventory) {
      return this.updateInventory(
        existingInventory.inventoryId,
        existingInventory.unitQuantity + createInventoryDto.currentQuantity,
      );
    } else {
      return this.createInventory(createInventoryDto);
    }
  }

  async findAll() {
    const products = await this.prisma.products.findMany({
      select: { productId: true, productName: true, productType: true },
    });
    const inventory = await this.prisma.inventory.findMany({
      select: { inventoryId: true, productId: true, unitQuantity: true },
    });

    return products.map((product) => {
      const inventoryItem = inventory.find(
        (item) => item.productId === product.productId,
      );
      return {
        productId: product.productId,
        productName: product.productName,
        productType: product.productType,
        inventoryId: inventoryItem?.inventoryId,
        unitQuantity: inventoryItem?.unitQuantity,
      };
    });
  }

  async findOne(options: { inventoryId?: number; productId?: number }) {
    return this.prisma.inventory.findUnique({
      where: {
        ...(options.inventoryId && { inventoryId: options.inventoryId }),
        ...(options.productId && { productId: options.productId }),
      },
    });
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return this.prisma.inventory.update({
      where: { inventoryId: id },
      data: updateInventoryDto,
    });
  }

  async remove(id: number) {
    return this.prisma.inventory.delete({
      where: { inventoryId: id },
    });
  }

  private async getProduct(productId: number) {
    return this.prisma.products.findUnique({
      where: { productId },
      select: { productId: true, productName: true, productType: true },
    });
  }

  private async getInventoryByProductId(inventoryId: number) {
    return this.prisma.inventory.findFirst({
      where: {
        inventoryId,
      },
    });
  }

  private async updateInventory(inventoryId: number, unitQuantity: number) {
    return this.prisma.inventory.update({
      where: { inventoryId },
      data: { unitQuantity },
    });
  }

  private async createInventory(createInventoryDto: CreateInventoryDto) {
    return this.prisma.inventory.create({
      data: {
        productId: createInventoryDto.productId,
        productName: createInventoryDto.productName,
        productType: createInventoryDto.productType,
        unitQuantity: createInventoryDto.currentQuantity,
      },
    });
  }
}
