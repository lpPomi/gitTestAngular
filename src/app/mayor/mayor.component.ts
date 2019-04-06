import { Component, OnInit, Output } from '@angular/core';

// to use the @Input directive to get data from component app.component
import { Input, EventEmitter  } from '@angular/core';

// to use the class model Subscriptor
import { Subscriptor } from '../_models/subscriptor';



/* here we get data from the parent component app-component (@Input)
   and get data from the child menor-component (@Output)  
*/
     
  

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.component.html',
  styleUrls: ['./mayor.component.css']
})
export class MayorComponent implements OnInit {

  // define the array of the Items of the class Subscriptor
  suscriptores: Subscriptor[] = []; 

  // or so
  //suscriptores: Array<Subscriptor> = [] ;


  nombre1: string;
  //id1:number;

  contadorId: number = 0;
  
  readDataFromAppComponent:string;

  /* @Input get the data from the app.component 
   into ther variable dataFromAppComponent
  */

  @Input() 
  dataFromAppComponent:string;
  
  @Input()
  lblBtnSubscribe:string;
  
  @Input()
  lblBtnUnsubscribe:string;


  // to get the url from memor-component from event @Output
  urlImage:string;

  /* @Output send data to the app.component 
     into ther variable ??? NO !!!

     @Output declare an emiter 
     the data sending take place with one method and this.emisor.emit(SOME-DATA);
  */


  // (emisor) = "method"  MO !!!
  @Output()
  emisor = new EventEmitter;


 constructor() { 

 }

 subscribe(){
  // console.log('subscribe');

    // fill the array Subscriptor with data from the mayor-component
  
    this.suscriptores.push(new Subscriptor(this.contadorId , this.nombre1));

    this.nombre1="";
   
   // console.log(this.suscriptores);
   
  /* send the contend from this url with the image to the parent app-component
     this emisor emit the string 'subscribe' to the parent
  */
    this.emisor.emit('subscribe');

    this.contadorId++;
 }



 unsubscribe(id:number){


  console.log(id);



  let index = -1;
  let nombre1 = "";
  
  //nombre1 = this.suscriptores[id].nombreCompleto;
  
  for (let i = 0; i< this.suscriptores.length; i++) {
    if(id === this.suscriptores[i].id){
      index = i;
      nombre1 = this.suscriptores[i].nombreCompleto;
      break;
    }      
  }

    
  // delete the entry with the splice function from js
  this.suscriptores.splice(index, 1);
  //this.suscriptores.splice(id, 1);
  

   //console.log('unsubscribe');

  /* send the contend from this url with the image to the parent app-component
     this emisor emit the string 'subscribe' to the parent
  */
  //this.emisor.emit('unsubscribe');
  this.emisor.emit(`${nombre1} unsubscribe`);
 }



  // method for the buttom to get the data
  countElemtsFromDatabase() {
    // console.log(this.dataFromAppComponent);  
    this.readDataFromAppComponent = this.dataFromAppComponent;
    return this.readDataFromAppComponent;
  }


   
  /* method mostrarImagen(), About @Output from child menor.component
     Be called in the mayor-component.html view with a method
     this method read the url and pass the data to the html view
  */
 mostrarImagen(event) {
   //console.log(event);
   this.urlImage = event;
  }

  ngOnInit() {
  }

}
