import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-to-spech',
  templateUrl: './text-to-spech.component.html',
  styleUrls: ['./text-to-spech.component.css']
})
export class TextToSpechComponent implements OnInit {

  constructor() { }
  public data : string;
  ngOnInit(): void {
  }

  textToSpeech(){
    // let $text =  document.getElementById("text");
    // this.data = $text.value;
    const speech = new SpeechSynthesisUtterance(this.data);
    window.speechSynthesis.speak(speech);
    // console.log(this.data);
  }
}
