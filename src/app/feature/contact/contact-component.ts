import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, FormControl,FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { map } from 'rxjs/operators';
import { EmailService } from 'src/app/shared/services/email.service';
import { Router } from '@angular/router';
import { SuccessComponent } from '../success/success.component';







@Component({
    selector:"app-contact",
    standalone:true,
    template:`
<section class="bg-[#6A98F0] dark:bg-gray-900 ">
<div class="w-full   bg-[#6A98F0] flex flex-col  ">
    <div class="flex justify-center  lg:flex-row lg:w-1/3 lg:justify-self-auto ">
    <h1 class="text-4xl underline decoration-red-400  pb-10 "><span class="text-6xl custom-test">C</span>ontact</h1>
    
</div>
</div>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  text-white">Me contacter</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Vous rencontrez un problème technique ? Vous souhaitez nous envoyer un feedback sur une fonctionnalité en version bêta ? Vous avez besoin de plus d'informations sur notre plan Business ? Faites-le nous savoir.</p>
       <form [formGroup]="form" (ngSubmit)="submit()">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre adresse email</label>
              <input type="email" formControlName="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nom@email.com" required>
              <div *ngIf="erreursForm['email']" class="text-red-600 text-2xl">
                {{ erreursForm['email'] }}
             </div>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
              <input type="text" formControlName="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Indiquez-nous comment nous pouvons vous aider" required>
              <div *ngIf="erreursForm['subject']" class="text-red-600 text-2xl">
                {{ erreursForm['subject'] }}
             </div>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
              <textarea id="message" formControlName="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none" placeholder="Laissez un commentaire..."></textarea>
              <div *ngIf="erreursForm['message']" class="text-red-600 text-2xl">
                {{ erreursForm['message'] }}
             </div>
          </div>
          <div class="mt-4">
          <button  class=" mr-2 bg-[#FF595A] text-white font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md  hover:bg-pink-700">Envoyer le message</button>
          <button  class="bg-[#FF595A] text-white font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md  hover:bg-pink-700"  (click)="reinitialiser() ">Annuler</button>
      </div>
      </form>
      <div *ngIf="formulaireValide" class="mt-4">
      <app-success/>
      </div>
  </div>
 

</section>

  `,
  imports:[
    ReactiveFormsModule,
    CommonModule,
    SuccessComponent
  ]
})



export class ContactComponent implements OnInit {

    public formulaireValide: boolean = false;

    public form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required])
        });
    
    public erreursForm: { [field: string]: string } = {};
    public subscription: Subscription = new Subscription();

      public messagesErreur: { [field: string]: { [field: string]: string } } = {
        email: {
            required: 'L\'adresse email est obligatoire',
            email: 'L\'adresse email n\'est pas valide'
        },
        subject: {
            required: 'Le sujet est obligatoire'
        },
        message: {
            required: 'Le message est obligatoire'
        }
      };
    



     
      ngOnInit(

      ) {
        
        this.subscription = this.form.valueChanges.subscribe(() => {
          this.erreursForm = {};
          for (const field in this.messagesErreur) {
            if (this.messagesErreur.hasOwnProperty(field)) {
              const control = this.form.get(field);
              if (control && control.dirty && !control.valid) {
                this.erreursForm[field] = '';
                for (const key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.erreursForm[field] += this.messagesErreur[field][key] + ' ';
                  }
                }
              }
            }
          }
        });
      }
    
      reinitialiser() {
        this.form.reset();
      }
    
    


      constructor(
        private emailService: EmailService,
        private router : Router
        ) { 

      

      }



     submit() {
  if (this.form.valid) {
    const { email, subject, message } = this.form.value;
    this.emailService.sendEmail(email, subject, message).subscribe(
      (res) => {
        console.log(res);
        this.formulaireValide = true;
        

        if(this.formulaireValide){
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        }


      },
      (err) => {
        console.log(err);
      }
    );
  }
}
}




      