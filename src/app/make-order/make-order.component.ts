import { Component, ViewChild, ElementRef } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
//import jsPDF from 'jspdf';
//import 'jspdf-autotable';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrl: './make-order.component.css'
})
export class MakeOrderComponent {
  foods: any[] = [];
  cartItems: any[] = [];
  totalAmount: number = 0;


  constructor(private util:NodeUtilityService) { }

  ngOnInit(): void {
    this.showfood();
  }
  showfood() {
    this.util.showfood().subscribe(
      (data) => {
        this.foods = data;
      },
      (error) => {
        console.error('Error in fetching foods:', error);
      }
    );
  }

  addToCart(food: any) {
    const amount = parseFloat(food.amount); // Convert food.amount to a number
    if (!isNaN(amount)) {
        // Check if the item already exists in the cart
        const index = this.cartItems.findIndex(item => item.foodName === food.food_name);
        if (index !== -1) {
            // If the item exists, increment its quantity
            this.cartItems[index].quantity++;
            // Update the total amount
            this.cartItems[index].amount+=amount;
            this.cartItems[index].totalAmount += amount;
        } else {
            // If the item doesn't exist, add it to the cart
            this.cartItems.push({ foodName: food.food_name, quantity: 1, amount: amount, totalAmount: amount });
        }
        // Update the totalAmount
        this.totalAmount += amount;
    } else {
        console.error('Invalid amount:', food.amount);
    }
}

removeFromCart(food:any, foodName: string) {
    // Find the index of the item to be removed in the cartItems array
    const amount = parseFloat(food.amount);
    const index = this.cartItems.findIndex(item => item.foodName === foodName);
    if (index !== -1) {
        // Get the removed item and its amount
        const removedItem = this.cartItems[index];
        // Reduce the quantity of the removed item
        
        removedItem.quantity--;
        // Update the totalAmount by subtracting the removed item's amount
        this.cartItems[index].amount-=amount;
        //this.totalAmount -= removedItem.amount;
        this.totalAmount -= amount;
        // If the quantity becomes 0, remove the item from the cartItems array
        if (removedItem.quantity === 0) {
            this.cartItems.splice(index, 1);
        } else {
            // Update the total amount for the remaining items
            removedItem.totalAmount -= removedItem.amount;
        }
    } else {
        console.error('Item not found in cart:', foodName);
    }
}


printBill(): void {
  const table = document.getElementById('cartTable');
  const total = document.getElementById('total');
  const currentDateTime = document.createElement('div');
  const date = new Date();
  currentDateTime.textContent = `Current date and time: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  currentDateTime.style.position = 'absolute';
  currentDateTime.style.top = '0';
  currentDateTime.style.right = '0';
  currentDateTime.style.fontSize = '12px';
  currentDateTime.style.padding = '5px';
  currentDateTime.style.border = '1px solid black';
  currentDateTime.style.backgroundColor = 'white';

  if (!table || !total) {
    return;
  }

  const printContent = table.outerHTML + total.outerHTML + currentDateTime.outerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
}
/*printBill(): void {
  const table = document.getElementById('cartTable');
  const total = document.getElementById('total');
  if (!table || !total) {
    return;
  }

  const printContent = table.outerHTML + total.outerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
}*/

resetCart(): void {
  this.cartItems = [];
  this.totalAmount = 0;
}
}
