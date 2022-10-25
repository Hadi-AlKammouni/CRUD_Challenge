import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { Products } from './products.entity';
import { ProductsPost } from './products.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private readonly productsPostRepository: Repository<Products>
    ) {}

    createProduct( productsPost: ProductsPost ):Observable<ProductsPost> {
        return from(this.productsPostRepository.save(productsPost))
    }
}