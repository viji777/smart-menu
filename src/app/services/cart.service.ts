import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addToCart(item: any) {
    const found = this.cart.find(i => i._id === item._id);

    if (found) {
      found.qty += 1;
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce(
      (sum, i) => sum + i.price * i.qty,
      0
    );
  }

  clearCart() {
    this.cart = [];
  }
}
