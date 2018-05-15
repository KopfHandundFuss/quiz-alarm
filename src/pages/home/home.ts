import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayerPage } from '../video-player/video-player';
import { CreditsPage } from '../credits/credits';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
    this.goToRules();
  }

  async goToRules() {
    await this.sleep(5000);
    this.navCtrl.push(VideoPlayerPage);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
