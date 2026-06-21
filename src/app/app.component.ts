import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecomform';
@ViewChild('Ecomform') Ecomform !: NgForm

  onproductsubmit(){
    if(this.Ecomform.invalid){
      return this.Ecomform.control.markAllAsTouched()
    }
    console.log(this.Ecomform.value);
    this.Ecomform.reset()
  }
}
