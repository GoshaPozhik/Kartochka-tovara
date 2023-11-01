import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class СategoryService {
  constructor(private readonly prisma: PrismaService) {}
  
  async createCategory(data: CreateCategoryDto) {
    return this.prisma.category.create({data});
  }
  

  async getAllCategory() {
    return this.prisma.category.findMany({
      
    });
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
      
    });
  }

  async updateCategory(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}

