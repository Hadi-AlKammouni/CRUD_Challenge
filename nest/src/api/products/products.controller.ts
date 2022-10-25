import { Controller, Post, Body, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProductsPost } from './products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor (private productsService: ProductsService) {}

    @Post()
    create(@Body() product: ProductsPost): Observable<ProductsPost> {
        return this.productsService.createProduct(product)
    }

    @Get()
    getAllProducts(): Observable<ProductsPost[]> {
        return this.productsService.getAllProducts()
    }
}