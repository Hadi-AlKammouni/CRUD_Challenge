import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { ProductsPost } from './products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor (private productsService: ProductsService) {}

    @Post()
    create(@Body() productsPost: ProductsPost): Observable<ProductsPost> {
        return this.productsService.createProduct(productsPost)
    }

    @Get()
    getAllProducts(): Observable<ProductsPost[]> {
        return this.productsService.getAllProducts()
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() productsPost: ProductsPost
    ): Observable<UpdateResult> {
        return this.productsService.updateProduct(id, productsPost)
    }
}