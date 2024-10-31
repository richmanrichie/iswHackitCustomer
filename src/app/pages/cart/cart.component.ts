import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';


interface CartItem {
  id: number;
  name: string;
  imagePath: string;
  total_count: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: CartItem[] = [
    { id: 1, name: 'Boat Headphone', imagePath: '/assets/images/products/p1.jpg', total_count: 2, price: 285000 },
    { id: 2, name: 'MacBook Air Pro', imagePath: '/assets/images/products/p2.jpg', total_count: 1, price: 500000 },
  ];

  displayedColumns: string[] = ['product', 'quantity', 'price', 'totalPrice', 'actions'];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Calculate the total price of all items in the cart
  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.total_count, 0);
  }

  // Remove an item from the cart
  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  // Checkout method to handle checkout logic
  checkout(): void {
    this.router.navigateByUrl('/dashboard/biller');
  }
}
