import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CartService } from 'src/app/services/cart.service';


interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
}


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule, MatIconModule],
  templateUrl: './apps-blog.component.html',
})
export class AppBlogComponent {
  constructor(

    private cartService: CartService

  ) { }

  productcards: productcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/p1.jpg',
      title: 'Boat Headphone',
      price: '285,000',
      rprice: '375,000',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/p2.jpg',
      title: 'MacBook Air Pro',
      price: '500,000',
      rprice: '550,000',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/p2.jpg',
      title: 'MacBook Air 2023',
      price: '700,000',
      rprice: '900,000',
    },
    {
      id: 4,
      imgSrc: '/assets/images/products/p2.jpg',
      title: 'MacBook Pro M3 2024',
      price: '2,500,000',
      rprice: '2,700,000',
    },
  ];

  addToCart(item: productcards) {
    this.cartService.addToCart({
      id: item.id,
      name: item.title,
      total_count: 1
    });
  }
}
