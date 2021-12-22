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
  getProduct(@Param('productId') productId: number): any {
    let prod = this.productService.findOne(productId);
    return { prod };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `created product`,
      payload: payload,
    };
  }
  @Put(':productId')
  update(@Body() payload: any, @Param('productId') productId: string) {
    return {
      productId,
      payload,
    };
  }
  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return {
      productId,
      message: 'deleted',
    };
  }
}
