import { Component } from "@angular/core";
import { Router } from "@angular/router";




@Component({
    selector:"landing-component",
    standalone:true,
    template:`


        
<div class='w-full lg:h-[65vh] bg-[#6A98F0]'>
  <div class='container   mx-auto px-8 flex flex-col justify-center h-full lg:flex lg:flex-row lg:justify-around lg:items-center'>
    <div class="h-1/4  sm:flex  sm:justify-center md:h-96   lg:h-4/6  ">
      <img src="./assets/images/Remy.png" class="rounded-full border-2  sm:h-60 md:h-full ">
    </div>
    <div class="h-1/4 lg:h-2/4  ">
      <p class='text-[#ccd6f6]'>Bonjour, je m'appelle</p>
      <h1 class='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
        Rémy
      </h1>
      <h2 class='text-4xl sm:text-4xl font-bold text-[#ccd6f6]'>
        Je suis développeur Full Stack.
      </h2>
      <p class=' py-4 max-w-[700px] text-[#ccd6f6]'>
        Je suis un développeur full-stack spécialisé dans la création d'expériences numériques exceptionnelles (et occasionnellement dans la conception). Actuellement, je me concentre sur le développement d'applications web full-stack réactives.
      </p>
      <div class="">
        <button class='text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-pink-600 hover:border-pink-600'>
          Voir mes travaux
          <span class='group-hover:rotate-90 duration-300'></span>
        </button>
      </div>
    </div>
  </div>
</div>



    
    
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