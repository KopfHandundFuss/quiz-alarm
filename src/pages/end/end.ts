import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CreditsPage } from '../credits/credits';


@Component({
  selector: 'page-end',
  templateUrl: 'end.html',
})
export class EndPage {

  public level;
  public correctAnswers;
  public state =" ";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //uebergebene Parameter speichern

    this.level = navParams.get('level');
    this.correctAnswers = navParams.get('correctAnswers');

    //waehlt je nach level und korrekten Antworten die passende Nachricht

    if (this.correctAnswers == (this.level + 1) * 4 ){
      this.state = "Perfekt, alles richtig!";
    } else if (this.correctAnswers <= this.level+1){
      this.state = "Schade, probier's nochmal!";
    } else {
      this.state = "Gut gemacht!";
    }

  }

  //zurueck zur Themenauswahl
  restart() {
    this.navCtrl.popTo(this.navCtrl.getByIndex(2));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndPage');
  }

  goToCredits() {
    this.navCtrl.push(CreditsPage);
  }
}
