import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

// à enlever
import { HttpClient } from '@angular/common/http';

import { Cat } from './objet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  url = "https://Simple1.voyagesgael.repl.co";
  urltab2 = "https://Simple1.voyagesgael.repl.co/tab";

  lignes: any[];
  cat: Cat;
  cat2: Cat;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.getTexte();
  }

  getTexte(): string {

    console.log("appel de getTexte()");

    let name:string = '';
    let age:number;
    let found:boolean;

    console.log("ici");

    let nom: string;
    let num: number;
    let chat: Cat;
    this.http.get(this.urltab2).subscribe(
      (data: any[]) => {
          //if(data.length){
          if(true) {
            console.log("data: " + data);
            //chat = new Cat(data[0].id, data[0].name, data[0].numero);
            chat = new Cat(data[0]);
            this.cat = chat;
            this.cat2 = data[0];
            nom = data[0].name;
            console.log("name = " + nom);
            console.log("name chat = " + chat.name);
            console.log("chat = " + chat);
          }
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          console.log('completed: ' + nom);
        }
      );
    console.log('fin: ' + nom);
    return nom;
  }

  post() {
    console.log("post");
    let data: Cat = {id:1, name:"Minou-Chat", numero:17};
    console.warn("chat", data);
    this.http.post(this.url, data).subscribe(
      () => {
            console.log("data: " + data);
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          console.log('completed: ' + data.name);
        }
      );
    console.log('fin: ' + data.name);
  }


  clear() {
    document.getElementById("zone1").innerText = "";
  }

  setTexte(texte) {
    document.getElementById("zone1").innerText = texte;
  }

  setLectureRest() {
    let x = this.getTexte();
    console.log("x = " + x);
    console.log("cat.name = " + this.cat.name);    
    console.log("cat2.name = " + this.cat2.name);    
    this.setTexte(this.cat.name);
  }


}
