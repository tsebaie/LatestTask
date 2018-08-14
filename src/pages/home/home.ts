import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage} from '../../pages/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
send(){
  this.navCtrl.push(SignupPage);
}
}
