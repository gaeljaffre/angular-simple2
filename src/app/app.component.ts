import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ObjetService, Cat, url } from './objet.service';

// à enlever
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  url = url;
  urltab = "https://Simple1.voyagesgael.repl.co/tab";
  posts: any[];

  objet;
  cat: Cat;

  constructor(
    private objetService: ObjetService,
    // XXX à enlever
    private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  getTestDirect() {
    let nom;

    this.http.get(url + "tab").subscribe(
      (data: any[]) => {
          console.log('data: ' + data);
          if(data.length){
            console.log('data: ' + data);
            nom = data[0].name;
          }
      }
    );
    console.log("nom = " + nom);
    return nom;
  }

  getTestDirect2() {
    //var v = this.http.get(this.urltab).pipe(map((res:Response) => res.json()));
    console.log("lecture de " + this.urltab);
    var v = this.http.get(this.urltab).subscribe((data: any) =>       
     {
        console.log(data);
        this.cat = {
          id: data['id'],
          name: data['name'],
          numero: data['numero']
        }
     });;
    console.log(this.cat);
    //console.log(this.cat.name);
  }

  getTest() {
      console.log("ici");
      this.objetService.getTexte().subscribe((data)=>{
        console.log(data);
        this.objet = data['objet'];
        //window.alert('');
    });
  }

  getTexte() {
    let cat: Cat;
    this.objetService.getTexte().subscribe((data: Cat) => cat = {
        name: data['name']
      }
    );

    return cat.name;
  }

  post() {
    this.objetService.postTexte();
  }

  getReponse() {
    let variable: any;
    this.objetService.getResponse().subscribe((data) => variable = {
        response: data['response']
      }
    );

  console.log(variable);
    return variable;
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
