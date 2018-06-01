import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ThemesPage } from '../themes/themes';
import { CreditsPage } from '../credits/credits';

  @Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayerPage');
  }
  goToCredits() {
    this.navCtrl.push(CreditsPage);
  }
  goThemes() {
    this.navCtrl.push(ThemesPage);
  }
}
