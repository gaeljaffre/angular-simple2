import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

//export const url = 'https://us-central1-telephone1-41de6.cloudfunctions.net/app/';

export const url = 'https://Simple1.voyagesgael.repl.co/';

export interface Cat {
  id: number,
  name: string,
  numero: number
}

@Injectable()
export class ObjetService {
  
  constructor(
      private http: HttpClient
    ) {}

  getTexte(): Observable<Cat> {
    //let chat = this.http.get<Cat>(url + 'tab');
    let chat = this.http.get(url + 'tab');
    return chat;
  }

  getResponse() {
    let reponse = this.http.get(url + 'tab');
    return reponse;
  }

  postTexte() {
    let v = this.http.post(url + 'post', {name: 'Minou-Chat'});
    console.log(v);
    return v;
  }

  postTexte2() {
    let v = this.http.post(url, {name: 'Minou-Chat'});
    console.log(v);
    return v;
  }


/*
  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(url);
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>(url + name)
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(url, cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(
      url + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete(url + name)
  }
*/

}
