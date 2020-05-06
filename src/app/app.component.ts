import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmi-calc';
  kilograms: number;
  centimeters: number;
  answer: number;

  click(){
    this.answer = this.kilograms / Math.pow (this.centimeters/100,2)
  }
}
