import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.css'
})
export class ComparisonComponent {
  numberLeft: number = 2;
  numberRight: number = 1;
  selection: number = 0;

  displayCorrectness(position: number){
    if (this.selection != position){
      return 2
    }
    if (position == 1 && this.numberLeft > this.numberRight) {
      return 1
    }
    if (position == 2 && this.numberLeft == this.numberRight) {
      return 1
    }
    if (position == 3 && this.numberLeft < this.numberRight) {
      return 1
    }
    return 0

  }

  newComparison() {
    this.selection = 0;
    var numberLeft = Math.floor(Math.random() * 25);
    var sign = Math.floor(Math.random() * 5);
    if (sign < 2) {
      var numberRight = Math.floor(Math.random() * numberLeft);
    }
    else if (sign < 4){
      var numberRight = 25 - Math.floor(Math.random() * (25-numberLeft));
    }
    else {
      var numberRight = numberLeft;
    }

    this.numberLeft = numberLeft;
    this.numberRight = numberRight;
  }

  setSelection(value: number){
    this.selection = value;
  }
}
