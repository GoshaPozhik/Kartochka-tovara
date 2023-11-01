import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categoryName: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
  }
  
  export class UpdateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categoryName: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
  }