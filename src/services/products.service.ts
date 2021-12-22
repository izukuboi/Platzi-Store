import { Injectable } from '@nestjs/common';
import { product } from 'src/Entities/productEntity';

@Injectable()
export class ProductsService {
  private products: product[] = [
    {
      id: 1,
      name: 'aifon',
      description: 'description aifon',
      price: 123,
      stock: 12,
      image: '',
    },
    {
      id: 2,
      name: 'pelota',
      description: 'description pelota',
      price: 222,
      stock: 10,
      image: '',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((prod) => prod.id === id);
  }
  create(productToCreate: any) {
    const prodToCreate: product = {
      description: productToCreate.decription,
      id: this.products.pop().id + 1,
      image: productToCreate.image,
      name: productToCreate.name,
      price: productToCreate.price,
      stock: productToCreate.stock,
    };
    return this.products.push(prodToCreate);
  }
}
