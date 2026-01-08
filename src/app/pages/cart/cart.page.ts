import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './cart.page.html',
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }

  orderWhatsApp() {
    let text = '🛒 *Order Details*\n\n';

    this.cartItems.forEach(item => {
      text += `${item.title} - ₹${item.price} × ${item.qty}\n`;
    });

    text += `\n💰 Total: ₹${this.total}`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
