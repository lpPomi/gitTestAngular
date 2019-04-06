import { Component, OnInit } from '@angular/core';


// to use the @Output directive
import { Output, EventEmitter } from '@angular/core';

// to use the @Input directive 
import { Input } from '@angular/core';


@Component({
  selector: 'app-menor',
  templateUrl: './menor.component.html',
  styleUrls: ['./menor.component.css']
})
export class MenorComponent implements OnInit {


  urlImage:string='https://yt3.ggpht.com/-svmpAtQZ_Tc/AAAAAAAAAAI/AAAAAAAAAAA/41N37I0zCko/s900-c-k-no-mo-rj-c0xffffff/photo.jpg';


  /* the canal variable contend is send from the mayor-component
    <app-menor
      [canal] = "'Mito'"
    ></app-menor>
  */
  @Input()
  canal:string;


  /*
    here we send data from this child componment to the 
    parent mayor-component
 
    the @Output is set to a variable from type "emiter"
    we make an emit to an event in the X component
    then the component X become a notification from with the event 
    and so can you send data to the parent mayor-component
        
  */
  
    @Output() 
    emisor = new EventEmitter;

    constructor() { }

    ngOnInit() {

    /* send the contend from this url with the image to the parent mayor-component
     this emisor emit a variable urlImage
     the mayor-component become the data into the ts file but
     we have to define the emiter in the html file e.g
     here we sert the component from where we get the emitter
     
     <app-menor
        (emisor) = "mostrarImagen($event)" 
    ></app-menor>

     then we create the method 
     
      mostrarImagen(event) {
         console.log(event);
      this.urlImage = event;
    }

     and also we declare the variable urlImage as string.
     Then we can show the image in the mayor  html file
     we can use also another method here instead of the ngOnInit method
     */
    this.emisor.emit(this.urlImage);

  }

}
