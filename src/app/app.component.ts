import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle=" i am component from component.ts";
  clickhandler(){
    alert("i am clicked");
  }
}
