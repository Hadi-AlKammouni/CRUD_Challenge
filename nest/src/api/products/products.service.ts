import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

    getAllProducts() :Observable<Products[]> {
        return from(this.productsPostRepository.find())
    }

    updateProduct(id: number, productsPost: ProductsPost): Observable<UpdateResult> {
        return from(this.productsPostRepository.update(id, productsPost))
    }

    deleteProduct(id: number): Observable<DeleteResult> {
        return from(this.productsPostRepository.delete(id))
    }
}