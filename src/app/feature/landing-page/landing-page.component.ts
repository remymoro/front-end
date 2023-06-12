import { Component } from "@angular/core";
import { Router } from "@angular/router";




@Component({
    selector:"landing-component",
    standalone:true,
    template:`

<section class="bg-gradient-to-r xl:h-screen bg-[#99DBF5] ">
  <div class="container xl:h-full h-full mx-auto px-1     sm:py-16 md:py-24">
    <div class="flex flex-wrap xl:-full items-center  ">
      <div class=" md:w-1/2 w-full   lg:w-3/6 lg:h-3/6   mb-8 md:mb-0 flex items-center justify-center">
        <div class="w-full flex justify-center h-full  lg:h-96 xl:w-96 mx-auto">
          
          <img src="../assets/images/remy.png" alt="Image de Remy" class="block rounded-full border-2 bg-[#0E2954]  border-white  lg:h-full  xl:w-full h-72 w-72 ">
        </div>
      </div>
      <div class="w-full md:w-1/2   lg:w-1/2 xl:w-1/2">
        <h1 class="text-custom text-3xl sm:text-4xl text-center lg:text-left  md:text-5xl font-bold mb-6">Bonjour, je suis Rémy !👋</h1>
        <p class=" text-lg sm:text-3xl lg:text-4xl mb-8  ">Je suis un développeur web passionné par la création de solutions numériques innovantes. Actuellement, je suis à la recherche d'une alternance pour poursuivre ma formation et développer mes compétences dans le domaine du développement web.</p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a class="bg-[#FF595A] text-white font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md hover:bg-pink-700" (click)="redirectionToContact()">Me contacter</a>
          <a class="bg-pink-500 text-white font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md" (click)="redirectionToExperience()">En savoir plus</a>
        </div>
      </div>
    </div>
  </div>
</section>





    
    
    `

})




export class landingPageComponent
{

  constructor(private router:Router){
  }



  public redirectionToContact(){
    this.router.navigate(['contact'])
  }

  public redirectionToExperience(){
    this.router.navigate(['experience'])
  }




}