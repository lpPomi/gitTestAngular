import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {


  nombre:string;
  content_from_input:string;
  apellidos:string;

  // array string for the courses
  cursos:Array<string> = ['CSS', 'HTML', 'JS', 'PHP'];
  

  // to add a new curse
  newCurse:string;
 
  emptyInput:string;

  // to show the message for empty input field in array cursos
  show1: boolean = false;

  constructor() 
  {
  this.nombre = 'Luis';
  this.emptyInput ="empty input !";

  }

 
  /*

 this.cursos = { '1','2'}; NO !!!!!    ..
 si quieres hacerlo asi tienes que usar

  public figuras:Array<any> = [
    {tipo: 'Heroe', nombre:'Batman', edad:2},
    {tipo: 'Comic', nombre:'Pluto', edad:23},
    {tipo: 'Entretainment', nombre:'Jaime', edad:25}
];


o hacer una clase (zapatillas) en models 

export class Zapatilla{

    constructor(
        public nombre:string,
        public marca:string,
        public color:string,
        public precio:number
    ) {}

y meterle datos en el consatructor del ts file
constructor() {
    this.zapatillas = [
      new Zapatilla('Clasic','Reebook','blanco',90),
      new Zapatilla('Runner','Adidas','negro',50),
      new Zapatilla('Tracker','Puma','gris',190)
    ];
   
  */


   // method saludar()
   saludar(event) {
    //console.log(event.target.value);
    this.content_from_input = event.target.value;
  }


  // method  addCurso() to add a new curse in the array cursos
  // the variable newCurse is transferred by two data binding !
  // from the html file to the component !
  // <input type="text" [(ngModel)]="newCurse"  />

  addCurso() {

    /*
    if (this.newCurse =='' || this.newCurse ==null) { 
      console.log('empty field');
      this.show1 = true;
    } else {
      this.cursos.push(this.newCurse);
      console.log('field not empty');
      console.log(this.newCurse);
      // clear the input field
      this.newCurse="";
      this.show1 = false;
    }
   }


   if (this.newCurse !=null && this.newCurse.length >0) { 
   */

  if (this.newCurse !=null && this.newCurse.length >0) { 
  
    this.cursos.push(this.newCurse);
    console.log('field not empty');
    
   /*
    for (let i = 0; i< this.cursos.length; i++) {
        console.log('cursos: ' + this.cursos[i]);
     }
   */

    //console.log('cursos: ' + this.cursos);
    // clear the input field
    this.newCurse="";
    this.show1 = false;
   
  } else {
    
    console.log('empty field');
    this.show1 = true;
  }
 }


  ngOnInit() {
  }

}
