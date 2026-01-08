import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, // for *ngIf, *ngFor
    FormsModule   // for ngModel
  ],
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  menuText = '';
  generatedItem: any = null;
  loading = false;
  selectedFile: File | null = null;

  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {}

  generateItem() {
    if (!this.menuText.trim()) {
      alert('Please enter menu description');
      return;
    }
    this.loading = true;
    this.menuService.generateMenu(this.menuText).subscribe({
      next: (res) => {
        this.generatedItem = res;
        this.loading = false;
      },
      error: () => {
        alert('Backend error');
        this.loading = false;
      }
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  saveItem() {
    if (!this.generatedItem) return;

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.generatedItem.imageUrl = reader.result as string;
        this.sendMenuToBackend();
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.sendMenuToBackend();
    }
  }

  sendMenuToBackend() {
    this.menuService.saveMenu(this.generatedItem).subscribe({
      next: () => {
        alert('Menu saved ✅');
        this.generatedItem = null;
        this.menuText = '';
        this.selectedFile = null;
      },
      error: () => alert('Failed to save menu')
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.router.navigate(['/cart']);
  }

  shareWhatsApp() {
    if (!this.generatedItem) return;

    const text =
      `🍽️ *${this.generatedItem.title}*\n\n` +
      `${this.generatedItem.description}\n\n` +
      `💰 Price: ₹${this.generatedItem.price}\n\n` +
      `Order now 👇\nhttp://localhost:8100`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  startListening() {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition not supported.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event: any) => {
      this.menuText = event.results[0][0].transcript;
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      alert('Speech recognition error: ' + event.error);
    };
  }
}
