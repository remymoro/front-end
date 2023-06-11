import { Component } from "@angular/core";
import { Router } from "@angular/router";




@Component({
    selector:"landing-component",
    standalone:true,
    template:`


<section class="bg-gradient-to-r bg-[#001233] min-h-screen">
  <div class="container mx-auto px-4 py-12 sm:py-20 md:py-32">
    <div class="flex flex-wrap items-center">
      <div class="w-full md:w-3/4 ">
        <h1 class="text-orange-600 text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Bonjour, je suis Rémy !</h1>
        <p class="text-white text-lg sm:text-xl mb-8">Je suis un développeur web passionné par la création de solutions numériques innovantes. Mon objectif principal est d'aider les entreprises à améliorer leur présence en ligne en créant des sites web efficaces et esthétiques. Je suis actuellement à la recherche d'un stage pour continuer à développer mes compétences et contribuer à des projets passionnants..</p>
        <div class="flex space-x-4">
          <a class="bg-[#FF595A] text-white font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md  hover:bg-pink-700"  (click)="redirectionToContact()">Me contacter</a>
          <a class="bg-pink-500 text-white font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md " (click)="redirectionToExperience()" >En savoir plus</a>
        </div>
      </div>
      <div class="w-full md:w-1/4 md:pl-8 mb-0">
        <img src="../assets/images/remy.png">
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