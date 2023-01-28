import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/product';
import { MockServiceService } from 'src/app/services/mock-service.service';
import * as CryptoJs from 'crypto-js';
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
    this.mockSvc.addProduct(this.addProduct).subscribe((res) => {
      if (res) alert('Product Added Successfully');
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
private nonceData:any = {};
  encryptData() {
    const key = 'sdhjsdHSHS8997!@#fhjdhfjdh9898';
    this.nonceData = CryptoJs.lib.WordArray.random(128 / 8); // 128 bit nonce
    console.log("daaaaaaaaaa", this.nonceData);
    
    const data = {
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

    const jsonData = JSON.stringify(data);
    const ciphertext = CryptoJs.AES.encrypt(jsonData, key, {
      // iv: this.nonceData,
      mode: CryptoJs.mode.CTR,
    });
    localStorage.setItem('ciphertext', ciphertext.toString());
    console.log("encrypted",  ciphertext.toString());
    
  }

  decryptData() {
    const key = 'sdhjsdHSHS8997!@#fhjdhfjdh9898';
    const ciphertext:any = localStorage.getItem('ciphertext');
    const bytes = CryptoJs.AES.decrypt(ciphertext, key, {
      // iv: this.nonceData,
      mode: CryptoJs.mode.CTR,
    });
    const plaintext = bytes.toString(CryptoJs.enc.Utf8);
    const jsonData = JSON.parse(plaintext);
    console.log(jsonData);
  }
}
