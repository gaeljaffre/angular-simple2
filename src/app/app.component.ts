import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

// à enlever
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  getTexte() {

    console.log("appel de getTexte()");

    let name:string = '';
    let age:number;
    let found:boolean;

    console.log("ici");

    this.http.get("https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=john").subscribe(
      (data: any[]) => {
          if(data.length){
            console.log(data);
            age = data[0].age;
            found = true;
            console.log("age1 = " + age);
          }
      }
    );

    let nom: string;
    let num: number;
    this.http.get(this.urltab2).subscribe(
      (data: any[]) => {
          if(data.length){
            console.log(data);
            nom = data[0].name;
            console.log("name = " + nom);
          }
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          console.log('completed');
        }
      );

  }

  post() {

  }


  clear() {
    document.getElementById("zone1").innerText = "";
  }

  setTexte(texte) {
    document.getElementById("zone1").innerText = texte;
  }

  setLectureRest() {
    this.setTexte(this.getTexte());
  }


}
