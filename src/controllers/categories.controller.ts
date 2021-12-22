import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return { message: `Product ${productId} and ${id}` };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'lmao',
      payload: payload,
    };
  }
  @Put(':categoryId')
  update(@Param('categoryId') categoryId: string, @Body() payload: any) {
    return {
      categoryId,
      payload,
    };
  }
}
