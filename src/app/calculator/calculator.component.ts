import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstValue = 0;
  secondValue = 0;
  result = 0;
  constructor() { }

  addition(): void {
    this.result = Number(this.firstValue) + Number(this.secondValue);
    console.log("Reached here");
    console.log(this.result);
  }

  subtraction(): void {
    this.result = Number(this.firstValue) - Number(this.secondValue);
  }

  multiplication(): void {
    this.result = Number(this.firstValue) * Number(this.secondValue);
  }

  division(): void {
    this.result = Number(this.firstValue) / Number(this.secondValue);
  }

  ngOnInit(): void {
  }

}
