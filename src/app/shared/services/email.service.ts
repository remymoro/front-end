import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl: string;

  constructor(private http: HttpClient) { 
    if (window.location.hostname === 'www.portfoliomoro.fr') {
      this.apiUrl = 'https://www.portfoliomoro.fr/send-email'; // URL de l'API pour envoyer l'e-mail en production
    } else {
      this.apiUrl = 'https://www.portfoliomoro.fr:3000/send-email'; // URL de l'API pour envoyer l'e-mail en développement
    }
  }
  

  sendEmail(email: string, subject: string, message: string): Observable<any> {
    const body = {
      email: email,
      subject: subject,
      message: message
    };
    return this.http.post(this.apiUrl, body); // Envoi de la requête HTTP POST avec les données de l'e-mail
  }



  asyncEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.http.get('https://apilayer.net/api/check?access_key=115ce3ae2ccdef30e018edbde78d2c4a&email=' + control.value + '&smtp=1&format=1')
      .pipe(
        map((response: any) => {
          return !response.smtp_check ? { asyncEmailValidator: control.value } : null;
        }));
    }
  }



}
