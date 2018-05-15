import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { EndPage } from '../end/end';
import { CreditsPage } from '../credits/credits';



@Component({
  selector: 'results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  public totalAnswers: number;
  public correctAnswers: number;
  public answeredQuestions: number;
  public isCorrect: boolean;
  public chosenPosition: number = null;
  public themes;
  public sub;
  public level;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.themes = navParams.get('themes');
    this.level = navParams.get('level');
    this.correctAnswers = navParams.get('correctAnswers');
    this.answeredQuestions = navParams.get('answeredQuestions');
    this.totalAnswers = (this.level+1) * 4;
    if (navParams.get('isCorrect') == true) {
      this.correctAnswers++;
    }
    
    this.sub = navParams.get('sub');
    this.answeredQuestions++;
  }

  //sind genug Fragen beantwortet wird zur EndPage navigiert, sonst zurueck zur naechsten Frage
  goToGame() {
    if (this.answeredQuestions == this.totalAnswers) {
      this.navCtrl.pop();
      this.navCtrl.push(EndPage, {level: this.level, correctAnswers: this.correctAnswers});
    } else {
      this.navCtrl.pop();
      this.navCtrl.push(GamePage, { chosenPosition: this.chosenPosition, themes: this.themes, sub: this.sub, level: this.level, correctAnswers: this.correctAnswers, answeredQuestions: this.answeredQuestions  });
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameAnswersPage');
  }

  goToCredits() {
    this.navCtrl.push(CreditsPage);
  }
}
