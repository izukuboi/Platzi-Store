import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  getProducts(): any {
    const products = this.productService.findAll();
    return {
      products,
    };
  }

  @Get('filter')
  getFilter(): any {
    return { message: 'Im a filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: number): any {
    let prod = this.productService.findOne(productId);
    console.log(prod, 'lmao');
    return { prod };
  }

  @Post()
  create(@Body() payload: any) {
    const createdProd = this.productService.create(payload);
    return {
      message: `created product`,
      createdProd,
    };
  }
  @Put(':productId')
  update(@Body() payload: any, @Param('productId') productId: string) {
    return this.productService.update(+productId, payload);
  }
  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return {
      productId,
      message: 'deleted',
    };
  }
}
