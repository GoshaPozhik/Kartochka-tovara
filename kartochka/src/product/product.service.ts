import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  async getAllProducts() {
    return this.prisma.product.findMany({
      include: { category: true },
    });
  }

  async getProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async updateProduct(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}

