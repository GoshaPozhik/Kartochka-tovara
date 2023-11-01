import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    category: string;
  }
  
  export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    category: string;
  }