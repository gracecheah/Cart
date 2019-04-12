import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AddToCart";
  selectedIndex: number = null;
  productQty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  qty: number = 0;
  show = null;
  grandTotalPrice: number = 0;
  showCart = null;

  allProducts = [
    {
      id: 0,
      price: 800,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 1,
      price: 1000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 2,
      price: 600,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 3,
      price: 2000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 4,
      price: 3000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 5,
      price: 4000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 6,
      price: 8000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 7,
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 8,
      price: 800,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 9,
      price: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 10,
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    },
    {
      id: 11,
      price: 9999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
      cartQty: 0
    }
  ];

  onSelectProduct(index: number) {
    this.selectedIndex = index;
  }

  checkSelected(index: number): string {
    if (this.selectedIndex === index) {
      return "#e2e2e2";
    }
    return "white";
  }

  addQty(index: number) {
    this.productQty[index] += 1;
    return this.productQty[index];
  }

  minusQty(index: number) {
    if (this.productQty[index] !== 0) {
      this.productQty[index] = this.productQty[index] - 1;
    }
    return this.productQty[index];
  }

  addToCart(index: number) {
    this.allProducts[index].cartQty = this.productQty[index];
    // tslint:disable-next-line: prefer-for-of
    // let i in this.allProducts
    // this.myCart.push(product)
    for (let a = 0; a < this.allProducts.length; a++) {
      this.grandTotalPrice =
        this.grandTotalPrice +
        this.allProducts[a].cartQty * this.allProducts[a].price;
    }
  }

  clearCart() {
    for (let a = 0; a < this.allProducts.length; a++) {
      this.grandTotalPrice = 0;
      this.allProducts[a].cartQty = 0;
    }
    this.selectedIndex = 0;
  }

  showAllProduct() {
    this.show = "yes";
  }

  myCart() {}
}
