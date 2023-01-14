import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/product';
import { MockServiceService } from 'src/app/services/mock-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public textValue = '';
  public produtsData: any = [];
  public addProduct: productModel = {} as productModel;
  constructor(private mockSvc: MockServiceService) {}
  ngOnInit(): void {
    this.getProductsData();
  }

  // Get all the products data
  getProductsData() {
    this.mockSvc.getProductData().subscribe((res) => {
      console.log(res);
      this.produtsData = res.products;
    });
  }

  // add produc
  onProdctAdd() {
    this.addProduct = {
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: '...',
      images: ['...', '...', '...'],
    };
    this.mockSvc.addProduct(this.addProduct).subscribe(res => {
      if(res) alert("Product Added Successfully")
    });
  }

  // edit product
  onProductEdit(eve: number) {
    let data = {
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
    };
    this.mockSvc.editProductData(eve, data).subscribe((res) => {
      if (res) alert('Porduct Updated sucessfully');
    });
  }

  // Delete product
  onProductDelete(id: number) {
    this.mockSvc.deleteProductData(id).subscribe((res) => {
      if (res) alert('Porduct Deleted sucessfully');
    });
  }
}
