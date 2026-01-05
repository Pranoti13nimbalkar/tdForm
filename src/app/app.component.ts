import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdForm';
@ViewChild('signUpForm')signUpForm! : NgForm
onSubmit(){
 console.log(this.signUpForm)
//  this.signUpForm.reset()
}

}
