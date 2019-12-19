import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employees';
  name = "Alex";
  message = "";

  showMessage(){ 
    console.log(this.message)
  }
}



