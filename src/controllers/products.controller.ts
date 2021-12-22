import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
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
  getFilter(): any {
    return { message: 'Im a filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string): any {
    return { message: `Product ${productId}` };
  }

  @Post()
  create(@Body() payload: product) {
    return {
      message: `created product`,
      payload: payload,
    };
  }
  @Put(':productId')
  update(@Body() payload: product, @Param('productId') productId: string){
    return {
      productId,
      payload
    }
  }
  @Delete(':productId')
  delete(@Param('productId') productId: string){
    return{
      productId,
      message: 'deleted'
    }
  }
}
