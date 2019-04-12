import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productList = [
    {
        id: 0,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 1,
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 2,
        price: 600,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 3,
        price: 2000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 4,
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 5,
        price: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 6,
        price: 8000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 7,
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 8,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 9,
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 10,
        price: 20,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    },
    {
        id: 11,
        price: 9999,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        selected: false
    }
  ]
  myCart = []

  isProductList = true

  setIsProductList(bool){
    this.isProductList = bool
  }

  addQuantity(index){
    this.productList[index].quantity += 1
  }

  reduceQuantity(index){
    if(this.productList[index].quantity > 0){
      this.productList[index].quantity -= 1
    }
  }

  selectItem(index){
    this.productList[index].selected = !this.productList[index].selected
  }

  addToCart(){
    if(this.hasSelectedItems()){
      for(let i in this.productList){
        const product = this.productList[i]
        if(product.selected && product.quantity > 0){
          this.myCart.push(Object.assign({},product))
          product.selected = false
          product.quantity = 0
        }
      }
      console.log(this.myCart)
    }
  }

  clearMyCart(){
    this.myCart = []
  }

  availableProducts(){
    const selectedProductIds = this.myCart.map((product) => product.id )

    return this.productList.filter((product) => (!selectedProductIds.includes(product.id)))
  }


  hasSelectedItems(){
    for(let i in this.productList){
      const product = this.productList[i]
      if(product.selected){
        return true
      }
    }
    return false
  }

  calculateTotalPrice(){
    let totalPrice = 0
    for(let product of this.myCart){
      totalPrice += product.price * product.quantity
    }
    return totalPrice
  }

  removeItem(index){
    this.myCart.splice(index, 1)
  }
}
