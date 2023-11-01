import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { СategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: СategoryService) {}
  
  @Post('category')
  createCategory(@Body() data: CreateCategoryDto) {
    return this.categoryService.createCategory(data);
  }

  @Get('products')
  getAllProducts() {
    return this.categoryService.getAllCategory();
  }

  @Get('category/:id')
  getProductById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @Put('category/:id')
  updateProduct(@Param('id') id: number, @Body() data: UpdateCategoryDto) {
    return this.categoryService.updateCategory(id, data);
  }

  @Delete('category/:id')
  deleteProduct(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}


