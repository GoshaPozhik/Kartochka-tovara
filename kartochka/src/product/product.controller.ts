import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  

  @Post('products')
  createProduct(@Body() data: CreateProductDto) {
    return this.productService.createProduct(data);
  }

  @Get('products')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('products/:id')
  getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Put('products/:id')
  updateProduct(@Param('id') id: number, @Body() data: UpdateProductDto) {
    return this.productService.updateProduct(id, data);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}

