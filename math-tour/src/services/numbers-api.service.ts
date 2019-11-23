import { DateFactModel } from './../models/DateFactModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NumbersApiService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
      'x-rapidapi-key': 'a79227b206mshbacda42483d6dafp1ae1e2jsnb3628e51e5ff'
    }),
  };

  apiUrl = 'https://rapidapi.com/divad12/api/numbers-1';

  constructor(private httpClient: HttpClient) { }

  // public getDateFact() {
  //   return fetch('https://numbersapi.p.rapidapi.com/6/21/date', {
  //     headers: {
  //       'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
  //       'x-rapidapi-key': 'a79227b206mshbacda42483d6dafp1ae1e2jsnb3628e51e5ff'
  //     }
  //   }).then(res => res.text());
  // }

  public getDateFact(dateFactModel: DateFactModel) {
    return this.httpClient.get(`https://numbersapi.p.rapidapi.com/${dateFactModel.month}/${dateFactModel.day}/date`, {
      responseType: 'text',
      headers: {
        'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
        'x-rapidapi-key': 'a79227b206mshbacda42483d6dafp1ae1e2jsnb3628e51e5ff'
      }
    });
  }

  public getMathFact() {
    return this.httpClient.get(`https://numbersapi.p.rapidapi.com/5/6/date`, this.httpOptions);
  }
}
