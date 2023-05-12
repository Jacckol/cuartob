import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductModelDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  selectedProduct: UpdateProductModelDto={}

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct(34);
  }
 getProducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
       this.products= response
      console.log(response)}
      )
 }
 getProduct(){
   this.productHttpService.getOne(498).subscribe(
    response=>{
      console.log(response)})
 }
 createProduct(){
  const data = {
    title: 'Consolas ',
    price: 650,
    description: 'Consola 240 / Jacckol Pozo',
    images: [
      'https://m.media-amazon.com/images/I/5https://th.bing.com/th/id/R.1b0ea62b168ae857a70fdd14d434b77f?rik=HMiK37fdC07C1Q&pid=ImgRaw&r=01A+xXT0yiL._AC_SY580_.jpg',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 editProduct(product: ProductModel){
  this.selectedProduct = product
 }
 updateProduct(){
  const data = {
    title: 'pantalon Coleccion',
    price: 1150,
    description: 'pantalon txxl / Jacckol pozo',
  };
  this.productHttpService.update(498,data).subscribe(
    response => {
      console.log(response)})
 }

 deleteProduct(id:ProductModel['id']){
  this.productHttpService.destroy(id).subscribe(
    response => {
      this.products= this.products.filter(product => product.id != id);
      console.log(response)})
 }

}
