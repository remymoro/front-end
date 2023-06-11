import { Component } from "@angular/core";







@Component({
    selector: 'app-success',
    standalone: true,
    template:`
    <div class=" bg-green-100 border h-1/2 w-2/3 border-green-400 text-green-700 px-4 py-3 rounded relative">
    <strong class="font-bold">Succès!</strong>
    <span class="block sm:inline">  Votre message a été envoyé avec succès.</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      </svg>
    </span>
  </div>
  `,
})



export class SuccessComponent {




}