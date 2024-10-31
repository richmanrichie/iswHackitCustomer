import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-biller',
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
  templateUrl: './biller.component.html',
  styleUrl: './biller.component.scss'
})
export class BillerComponent {
  walletBalance = 2000000; // Example wallet balance
  billerName = new FormControl('');
  contactNumber = new FormControl('');
  billingAddress = new FormControl('');
  
  // Initial payment and options
  baseAmount = 1070000; // Example total amount to be paid
  selectedDuration = 12; // Default duration in months

  paymentOptions = [
    { label: '3 Months', value: 3 },
    { label: '4 Months', value: 4 },
    { label: '6 Months', value: 6 },
  ];

  constructor(private snackBar: MatSnackBar, private router: Router) {}
  get monthlyPayment(): number {
    return this.baseAmount / this.selectedDuration;
  }

  updateMonthlyPayment(): void {
    // Triggered when user selects a new duration
    // monthlyPayment getter recalculates automatically
  }

  checkout(): void {
      // Show the snackbar
  this.snackBar.open('Order placed successfully!', 'Close', {
    duration: 5000, // duration in milliseconds
    verticalPosition: 'top', // position: top/bottom
    horizontalPosition: 'center', // position: start/center/end
  });

  // Redirect to the home page after the snackbar shows
  this.router.navigate(['/dashboard']);
  }
}
