import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { product } from 'src/interfaces/example';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): any {
    return {
      message: `Products limit: ${limit} offset: ${offset} brand: ${brand} `,
    };
  }

  @Get('filter')
  getFilter(): string {
    return 'Im a filter';
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): any {
    return { message: `Product ${productId}` };
  }

  @Post()
  create(@Body() payload: product) {
    return {
      message: `created product`,
      payload: payload
    };
  }
}
