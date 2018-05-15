import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { CreditsPage } from '../credits/credits';

@Component({
  selector: 'page-themes',
  templateUrl: 'themes.html',
})
export class ThemesPage {

  public clothesCount;
  public bodyCount;
  public fruitCount;
  public signsCount;
  public animalCount;
  public themesResult;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clothesCount = 0;
    this.bodyCount = 0;
    this.fruitCount = 0;
    this.signsCount = 0;
    this.animalCount = 0;
 
    this.themesResult = 0;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemesPage');
  }

  buttonClickable(count) {
    if (count == 0) {
      (<HTMLInputElement>document.getElementById("nextButton")).disabled = true;
      console.log(count);
    } else {
      (<HTMLInputElement>document.getElementById("nextButton")).disabled = false;
      console.log(count);
    }
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage, {themes: this.themesResult});
  }
  goToHome() {
    this.navCtrl.pop();
  }

  toggleClothes() {
    if (this.clothesCount == 0) {
      this.clothesCount = 1
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    } else {
      this.clothesCount = 0
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    }
  }
  toggleBody() {
    if (this.bodyCount == 0) {
      this.bodyCount = 10
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    } else {
      this.bodyCount = 0
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    }
  }
  toggleFruit() {
    if (this.fruitCount == 0) {
      this.fruitCount = 100
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    } else {
      this.fruitCount = 0
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    }
  }
  toggleSigns() {
    if (this.signsCount == 0) {
      this.signsCount = 1000
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    } else {
      this.signsCount = 0
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    }
  }
  toggleAnimals() {
    if (this.animalCount == 0) {
      this.animalCount = 10000
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    } else {
      this.animalCount = 0
      this.themesResult = this.clothesCount + this.bodyCount + this.fruitCount + this.signsCount + this.animalCount;
      this.buttonClickable(this.themesResult);
    }
  }
  goToCredits() {
    this.navCtrl.push(CreditsPage);
  }
}
