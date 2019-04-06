import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dempapp';

  dataInAppComponent:string;
  
  dataToShowSubscribesEmitter:string;

  showGreen:boolean=false;
  showRed:boolean=false;

  constructor() {
    this.dataInAppComponent='Data is comming from the app-component';
  }


  // method to receive the @Output() from mayor-component
  getStringFromMayor(event) {
    //console.log(event);
    this.dataToShowSubscribesEmitter='';

    if (event == 'subscribe') {
     // console.log(event);
      this.showGreen=true;
      this.showRed=false;
    }
    else  {
    //  console.log(event);
      this.showGreen=false;
      this.showRed=true;
    }
    this.dataToShowSubscribesEmitter=event;
  }


  ngOnInit() {
  }

}