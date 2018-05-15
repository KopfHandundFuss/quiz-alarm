import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ResultsPage } from '../results/results';
import { CreditsPage } from '../credits/credits';

@Component({
  selector: 'game',
  templateUrl: 'game.html',
})
export class GamePage {

  //Video IDs in den jeweiligen Kategorien
  public videoPoolAnimals: string[] = ['156827785', '156827681', '156858767', '156827820', '156827746', '156847074', '156847074', '156827709', '156853661', '156877431', '156827735'];
  public videoPoolClothes: string[] = ['156827725', '156865707', '156853537', '156827756', '156858756', '156853713', '156827827', '156877767', '156868508'];
  public videoPoolSigns: string[] = ['156823153', '156877522', '156877522', '156823357', '156865775', '156868632', '156827671', '156879604', '156841550', '156868566', '156858699'];
  public videoPoolFruit: string[] = ['156823345', '156823376', '156823390', '156853691', '156827768', '156853686', '156827658', '156823154', '156877335', '156853600', '156853600', '156877607'];
  public videoPoolBody: string[] = ['156823166', '156827809', '156880144', '156823405', '156827696', '156827674', '156823327', '156878452', '156878335', '156823200', '156827792', '156823316', '156827704'];

  //Antworten passend zu den Videos, immer sortiert! videoPoolAnimals[2] hat Loesung answerPoolAnimals[2], aufpassen: hinten sind antworten ohne dazugehoerige Frage
  public answerPoolAnimals: string[] = ['Katze', 'Hahn', 'Schwein', 'Kuh', 'Hund', 'Maus', 'Schaf', 'Hase', 'Pferd', 'Ziege', 'Huhn', 'Ente'];
  public answerPoolClothes: string[] = ['Hose', 'Socken', 'Mütze', 'Jacke', 'Schuhe', 'Pullover', 'Kleid', 'Unterhose', 'T-Shirt', 'Hemd', 'Rock'];
  public answerPoolSigns: string[] = ['Ampel', 'Zebrastreifen', 'Bahnübergang', 'Stopschild', 'Vorfahrtsschild', 'Radweg', 'Gehweg', 'Verbot für Fußgänger', 'Verbot der Einfahrt', 'Sackgasse', 'Einbahnstraße'];
  public answerPoolFruit: string[] = ['Apfel', 'Banane', 'Birne', 'Pflaume', 'Kirsche', 'Pfirsich', 'Erdbeere', 'Ananas', 'Zitrone', 'Orange', 'Wassermelone', 'Kiwi'];
  public answerPoolBody: string[] = ['Fuß', 'Kopf', 'Arm', 'Bein', 'Hand', 'Finger', 'Zeh', 'Po', 'Rücken', 'Ohren', 'Knie', 'Oberkörper', 'Hals'];

  //Untertitel passend zu den Videos, genauso sortiert wie die Antworten
  public subtitlePoolAnimals: string[] = ['Welches Tier läuft auf 4 Pfoten und miaut?', 'Welches Tier trägt auf seinem Kopf einen Kamm?', 'Welches Tier liebt den Schmutz?', 'Welches Tier hat Milch?', 'Welches Tier bellt?', 'Welches Tier ist klein und isst Käse?', 'Welches Tier hat Hörner und Wolle am Körper?', 'Welches Tier hat richtig lange Ohren und der Schwanz wird "Blume" genannt?', 'Auf welches Tier kannst du steigen und dich darauf setzen?', 'Welches Tier hat einen langen Bart?', 'Welches Tier legt Eier?'];
  public subtitlePoolClothes: string[] = ['Was durften früher nur Männer und Jungs tragen, aber heute auch Frauen und Mädchen?', 'Was ziehen wir uns oftmals über die Füße, bevor wir Schuhe anziehen?', 'Was hält den Kopf warm, wenn wir es anziehen?', 'Wenn es im Winter richtig kalt ist, was ziehst du an, damit der Körper warm bleibt?', 'Was ziehen wir uns an die Füße, damit wir im Park spazieren können?', 'Was ziehen wir über das T-Shirt an? Es hat keine Reißverschluss oder Knöpfe!', 'Was tragen Frauen und Mädchen im Sommer sehr gerne? ', 'Was ziehen wir unter die Hose an?', 'Was ziehen wir unter den Pullover an?'];
  public subtitlePoolSigns: string[] = ['Welches Straßenschild hat oben die Farbe Rot, in der Mitte Gelb und unten die Farbe Grün?', 'Welches Straßenschild erinnert an ein Fellmuster auf der Straße?', 'Welches Straßenschild ist dreieckig und hat ein Zaun in der MItte abgebildet?', 'Welches Straßenschild ist rot und sechseckig? Es hat in der Mitte weiße Buchstaben!', 'Welches Straßenschild ist ein umgedrehtes Dreieck mit rotem Rahmen?', 'Welches Straßenschild ist rund und blau und hat in der Mitte ein weißes Fahrrad?', 'Welches Straßenschild ist blau und rund und man kann eine Mutter mit Kind spazieren sehen?', 'Welches Straßenschild ist rund, hat einen roten Rand und in der Mitte einen Mann?', 'Welches rundes Straßenschild ist rot und hat einen weißen Balken in der Mitte?', 'Welches Straßenschild ist eckig und blau? Auf ihm sind ein weißer senkrechter und roter waagerechter Balken zu sehen.'];
  public subtitlePoolFruit: string[] = ['Welches Obst kocht man lange um ein Muhs zu erhalten?', 'Was essen Affen am liebsten?', 'Welches Obst hat einen schmalen Hals?', 'Aus welchem lila-farbigen Obst macht man auch sehr gerne Marmelade und backt Kuchen?', 'Welches Obst kannst du um das Ohr legen?', 'Welches Obst hat Haare?', 'Welches Obst ist rot und hat eine "struppige" Form?', 'Welches Obst hat grüne längliche Blätter?', 'Welches Obst ist richtig sauer?', 'Aus welchem Obst können wir Saft pressen?', 'Welches Obst ist groß und rund, außen grün und innen rot?'];
  public subtitlePoolBody: string[] = ['Mit was läufst du durch die Gegend?', 'Welches Körperteil sitzt auf unseren Schultern?', 'An dem Körper schließen unten die Beine an. Was befindet sich jedoch oben seitlich am Körper?', 'An welchem Körperteil befinden sich das Knie und der Fuß?', 'Welches Körperteil brauchen wir zum gebärden?', 'Was besitzt deine Hand? ', 'Was besitzen deine Füße?', 'Welches Körperteil hilft dir weich zu sitzen?', 'Wo trägst du deinen Rucksack?', 'Mit was kann Sprache wahrgenommen werden?', 'Was befindet sich am Bein zwischen Po und Fuß?', 'Wo befinden sich Brust, Bauch und Arme?', 'Was liegt zwischen Körper und Kopf? '];

  //Variablen-init
  public tmp: string[];

  public themes: string[];
  public randomAnswers: string[] = [];

  public chosenPosition: number;
  public randomPos: number;

  public level: number;

  public subtitles: boolean;

  public chosenCategory: string;
  public randVideo;
  public safeURL;
  public sub;
  public answer: string;
  public time;

  public answerOne;
  public answerTwo;
  public answerThree;
  public answerFour;

  public progress = 0;
  public goal;
  public isCorrect: boolean;

  public correctAnswers: number;
  public answeredQuestions: number;
  // Variablen-init Ende

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {

    //uebergebene Parameter speichern
    this.themes = navParams.get('themes');
    this.level = navParams.get('level');
    this.subtitles = navParams.get('sub');
    this.chosenPosition = navParams.get('chosenPosition');

    //Auswahl der Frage
    if (this.chosenPosition == null) {

      //Auswahl eines der Themen und der dazugehoerigen Antworten und Untertitel
      var randomCategory = this.randomIntFromInterval(0, this.themes.length - 1);
      this.chosenCategory = this.themes[randomCategory];
      switch (this.chosenCategory) {
        case "Clothes": {
          //gewaehlt ist Kleidung, jetzt zufaelliges Fragevideo waehlen
          this.chosenPosition = this.randomIntFromInterval(0, this.videoPoolClothes.length - 1);
          this.randVideo = this.videoPoolClothes[this.chosenPosition];
          this.updateVideoUrl(this.randVideo);
          //passende Untertitel in der Variable speichern
          if (this.subtitles) {
            this.sub = this.subtitlePoolClothes[this.chosenPosition];
          }
          //passende Antwort in der Variable speichern
          this.answer = this.answerPoolClothes[this.chosenPosition];
          this.tmp = this.answerPoolClothes;
          //richtige Antwort temporaer aus dem Antwort-array nehmen
          this.tmp.splice(this.chosenPosition, 1);

          //falsche Antwortmoeglichkeiten per Zufall waehlen
          for (var i = 0; i < 4; i++) {
            this.randomPos = this.randomIntFromInterval(0, this.tmp.length - 1);
            this.randomAnswers.push(this.tmp[this.randomPos]);
            this.tmp.splice(this.randomPos,1);
          }
          break;
        }
        case "Body": {
          this.chosenPosition = this.randomIntFromInterval(0, this.videoPoolBody.length - 1);
          this.randVideo = this.videoPoolBody[this.chosenPosition];
          this.updateVideoUrl(this.randVideo);
          if (this.subtitles) {
            this.sub = this.subtitlePoolBody[this.chosenPosition];
          }
          this.answer = this.answerPoolBody[this.chosenPosition];
          this.tmp = this.answerPoolBody;
          this.tmp.splice(this.chosenPosition, 1);

          for (var j = 0; j < 4; j++) {
            this.randomPos = this.randomIntFromInterval(0, this.tmp.length - 1);
            this.randomAnswers.push(this.tmp[this.randomPos]);
            this.tmp.splice(this.randomPos, 1);
          }
          break;
        }
        case "Fruit": {
          this.chosenPosition = this.randomIntFromInterval(0, this.videoPoolFruit.length - 1);
          this.randVideo = this.videoPoolFruit[this.chosenPosition];
          this.updateVideoUrl(this.randVideo);
          if (this.subtitles) {
            this.sub = this.subtitlePoolFruit[this.chosenPosition];
          }
          this.answer = this.answerPoolFruit[this.chosenPosition];
          this.tmp = this.answerPoolFruit;
          this.tmp.splice(this.chosenPosition, 1);

          for (var k = 0; k < 4; k++) {
            this.randomPos = this.randomIntFromInterval(0, this.tmp.length - 1);
            this.randomAnswers.push(this.tmp[this.randomPos]);
            this.tmp.splice(this.randomPos, 1);
          }
          break;
        }
        case "Signs": {
          this.chosenPosition = this.randomIntFromInterval(0, this.videoPoolSigns.length - 1);
          this.randVideo = this.videoPoolSigns[this.chosenPosition];
          this.updateVideoUrl(this.randVideo);
          if (this.subtitles) {
            this.sub = this.subtitlePoolSigns[this.chosenPosition];
          }
          this.answer = this.answerPoolSigns[this.chosenPosition];
          this.tmp = this.answerPoolSigns;
          this.tmp.splice(this.chosenPosition, 1);

          for (var l = 0; l < 4; l++) {
            this.randomPos = this.randomIntFromInterval(0, this.tmp.length - 1);
            this.randomAnswers.push(this.tmp[this.randomPos]);
            this.tmp.splice(this.randomPos, 1);
          }
          break;
        }
        case "Animals": {
          this.chosenPosition = this.randomIntFromInterval(0, this.videoPoolAnimals.length - 1);
          this.randVideo = this.videoPoolAnimals[this.chosenPosition];
          this.updateVideoUrl(this.randVideo);
          if (this.subtitles) {
            this.sub = this.subtitlePoolAnimals[this.chosenPosition];
          }
          this.answer = this.answerPoolAnimals[this.chosenPosition];
          this.tmp = this.answerPoolAnimals;
          this.tmp.splice(this.chosenPosition, 1);

          for (var m = 0; m < 4; m++) {
            this.randomPos = this.randomIntFromInterval(0, this.tmp.length - 1);
            this.randomAnswers.push(this.tmp[this.randomPos]);
            this.tmp.splice(this.randomPos, 1);
          }
          break;
        }

      }

      //eine der falschen Antworten mit der richtigen ueberschreiben
      this.randomPos = this.randomIntFromInterval(0, 3);
      this.randomAnswers[this.randomPos] = this.answer;

    }

    //fuer die Buttons praeparieren
    this.answerOne = this.randomAnswers[0];
    this.answerTwo = this.randomAnswers[1];
    this.answerThree = this.randomAnswers[2];
    this.answerFour = this.randomAnswers[3];

    this.goal = ((this.level + 1) * 4);

    this.correctAnswers = navParams.get('correctAnswers');
    this.answeredQuestions = navParams.get('answeredQuestions');
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  //macht Video-URL secure gegen crossattacks
  updateVideoUrl(id: string) {

    var dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  //ca 3 Sekunden Timer zum Screenwechsel
  async goToResults() {
    await this.sleep(3000);
    this.navCtrl.pop();
    this.navCtrl.push(ResultsPage, { level: this.level, isCorrect: this.isCorrect, themes: this.themes, sub: this.subtitles, correctAnswers: this.correctAnswers, answeredQuestions: this.answeredQuestions });
  }

  //nach Klick werden die Buttons disabled und ueberprueft ob die Antwort korrekt war
  checkAnswers(button: number) {

    (<HTMLInputElement>document.getElementById("buttonOne")).disabled = true;
    (<HTMLInputElement>document.getElementById("buttonTwo")).disabled = true;
    (<HTMLInputElement>document.getElementById("buttonThree")).disabled = true;
    (<HTMLInputElement>document.getElementById("buttonFour")).disabled = true;
    
    switch (button) {
      case 1:
        if (this.answerOne === this.answer) {
          //bei richtiger Antwort wird der Button gruen gefaerbt
          document.getElementById('buttonOne').style.borderWidth = "5px";
          document.getElementById('buttonOne').style.backgroundColor = "green";
          this.isCorrect = true;
          this.goToResults();
        } else {
          //bei falscher Antwort wird der Button rot und die korrekte Antwort wird gruen
          document.getElementById('buttonOne').style.borderWidth = "5px";
          document.getElementById('buttonOne').style.backgroundColor = "red";
          this.isCorrect = false;
          //fkt sucht den korrekten Button und faerbt ihn gruen
          this.highlightCorrectButton();
          this.goToResults();
        }
        break;
      case 2:
        if (this.answerTwo === this.answer) {
          document.getElementById('buttonTwo').style.borderWidth = "5px";
          document.getElementById('buttonTwo').style.backgroundColor = "green";
          this.isCorrect = true;
          this.goToResults();
        } else {
          document.getElementById('buttonTwo').style.borderWidth = "5px";
          document.getElementById('buttonTwo').style.backgroundColor = "red";
          this.isCorrect = false;
          this.highlightCorrectButton();
          this.goToResults();
        }
        break;
      case 3:
        if (this.answerThree === this.answer) {
          document.getElementById('buttonThree').style.borderWidth = "5px";
          document.getElementById('buttonThree').style.backgroundColor = "green";
          this.isCorrect = true;
          this.goToResults();
        } else {
          document.getElementById('buttonThree').style.borderWidth = "5px";
          document.getElementById('buttonThree').style.backgroundColor = "red";
          this.isCorrect = false;
          this.highlightCorrectButton();
          this.goToResults();
        }
        break;
      case 4:
        if (this.answerFour === this.answer) {
          document.getElementById('buttonFour').style.borderWidth = "5px";
          document.getElementById('buttonFour').style.backgroundColor = "green";
          this.isCorrect = true;
          this.goToResults();
        } else {
          document.getElementById('buttonFour').style.borderWidth = "5px";
          document.getElementById('buttonFour').style.backgroundColor = "red";
          this.isCorrect = false;
          this.highlightCorrectButton();
          this.goToResults();
        }
        break;
    }
  }

  highlightCorrectButton() {
    //ueberprueft alle Antworten auf richtigkeit und faerbt den richtigen gruen
    if (this.answer === this.answerOne) {
      document.getElementById('buttonOne').style.backgroundColor = "green";
    } else if (this.answer === this.answerTwo) {
      document.getElementById('buttonTwo').style.backgroundColor = "green";
    } else if (this.answer === this.answerThree) {
      document.getElementById('buttonThree').style.backgroundColor = "green";
    } else {
      document.getElementById('buttonFour').style.backgroundColor = "green";
    }
      
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
