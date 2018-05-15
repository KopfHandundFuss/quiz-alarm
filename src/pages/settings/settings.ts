import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { CreditsPage } from '../credits/credits';
import { DummyPage } from '../dummy/dummy';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public level = 0;

  public subtitles = true;
  public themes;
  public themesArray: string[];
  public chosenPosition: number = null;
  public correctAnswers: number = 0;
  public answeredQuestions: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.themes = String(navParams.get('themes'));
    this.themesArray = this.themes.split('', 5);

    while (this.themesArray.length < 5) {
      this.themesArray.splice(0, 0, "0");
      console.log(this.themesArray);
    }

    if (this.themesArray[4] == "1") {
      this.themesArray[4] = "Clothes";
    } else {
      this.themesArray.splice(4, 1);
    }
    if (this.themesArray[3] == "1") {
      this.themesArray[3] = "Body";
    } else {
      this.themesArray.splice(3, 1);
    }
    if (this.themesArray[2] == "1") {
      this.themesArray[2] = "Fruit";
    } else {
      this.themesArray.splice(2, 1);
    }
    if (this.themesArray[1] == "1") {
      this.themesArray[1] = "Signs";
    } else {
      this.themesArray.splice(1, 1);
    }
    if (this.themesArray[0] == "1") {
      this.themesArray[0] = "Animals";
    } else {
      this.themesArray.splice(0, 1);
    }
    console.log(this.themesArray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goToGame() {
    this.navCtrl.push(DummyPage);
    this.navCtrl.push(GamePage, { level: this.level, sub: this.subtitles, themes: this.themesArray, chosenPosition: this.chosenPosition, correctAnswers: this.correctAnswers, answeredQuestions: this.answeredQuestions });
  }

  backToThemes() {
    this.navCtrl.pop();
  }

  goToCredits() {
    this.navCtrl.push(CreditsPage);
  }

  toggleSubtitles() {
    if (this.subtitles) {
      (<HTMLInputElement>document.getElementById("subtitle")).style.color = "#D3D3D3";
      this.subtitles = false;
    } else {
      (<HTMLInputElement>document.getElementById("subtitle")).style.color = "#0aa6ce";
      this.subtitles = true;
    }
  }

  levelOne() {
    (<HTMLInputElement>document.getElementById("levelTwo")).style.color = "#D3D3D3";
    (<HTMLInputElement>document.getElementById("levelThree")).style.color = "#D3D3D3";

    this.level = 0;
  }

  levelTwo() {
    (<HTMLInputElement>document.getElementById("levelTwo")).style.color = "#F2CB00";
    (<HTMLInputElement>document.getElementById("levelThree")).style.color = "#D3D3D3";

    this.level = 1;
  }

  levelThree() {

    (<HTMLInputElement>document.getElementById("levelTwo")).style.color = "#F2CB00";
    (<HTMLInputElement>document.getElementById("levelThree")).style.color = "#F2CB00";

    this.level = 2;
  }
  mod(n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
  }

}
