import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
height: number;
weight: number;
bmi: number;
message: string;
  constructor(public navCtrl: NavController) {

  }
  CalculateBMI() {
    this.bmi = this.weight / (this.height * this.height) ; 
    this.bmi = parseFloat(this.bmi.toFixed(2));
    
    if(this.bmi < 18.5) {
      this.message = "Under Weight";
    } else if (this.bmi > 18.5 && this.bmi < 25) {
      this.message = "Normal";}
     else if (this.bmi > 25 && this.bmi < 30) {
      this.message = "Over Weight";

} else {this.message = "Obese"}

  }
}