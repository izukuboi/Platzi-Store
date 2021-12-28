import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';
import { product } from 'src/Entities/productEntity';

@Injectable()
export class ProductsService {
  private counter: number = 2;
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
      id: 3,
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
    let prod = this.products.find((prod) => prod.id == id);
    return prod;
  }
  create(productToCreate: any) {
    this.counter = this.counter + 1;
    const prodToCreate: product = {
      id: this.counter,
      ...productToCreate,
    };
    return this.products.push(prodToCreate);
  }
  update(id: number, data: any) {
    let prod = this.findOne(id);
    if (prod != null) {
      const index = this.products.findIndex((i) => i.id == id);
      this.products[index] = {
        ...prod,
        ...data,
      };
      return this.products[index];
    }
    return null;
  }
}
