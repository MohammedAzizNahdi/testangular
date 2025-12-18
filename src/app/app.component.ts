import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hello 4IoSyS1';
  x: number = 5;
  y: boolean = false;
  tab=["abC", 5, 't', 56];
  text: string = "T";
  fillText(){
    this.text = "This is a simple text.";
  }
  getNumber(): number{
    return 10;
  }
}
