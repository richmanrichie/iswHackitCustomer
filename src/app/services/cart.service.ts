import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  total_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  private cartCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  // Method to get cart items as an observable
  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  // Method to get cart count as an observable
  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  // Method to add items to the cart
  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.total_count += item.total_count; // Increase quantity if item already exists
    } else {
      this.cartItems.push({ ...item });
    }

    this.updateCart();
  }

  // Helper method to update the cart count and items
  private updateCart(): void {
    this.cartSubject.next(this.cartItems);
    this.cartCountSubject.next(this.cartItems.length);
  }
}
