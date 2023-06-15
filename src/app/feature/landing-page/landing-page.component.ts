import { Component } from "@angular/core";
import { Router } from "@angular/router";




@Component({
    selector:"landing-component",
    standalone:true,
    template:`

<section class="bg-gradient-to-r lg:h-[60vh] h-screen w-full  bg-[#6A98F0]">
  <div class="container   xl:flex lg:flex  mx-auto px-1 sm:py-16 md:py-15">
    <div class="w-full h-full  md:w-full lg:h-1/2 lg:w-1/2 flex items-start  justify-center">
          <img src="../assets/images/Remy.png" alt="Image de Remy" class="block rounded-full border-2 bg-[#0E2954] border-white h-56 w-56  md:h-60 md:w-60 lg:w-80 lg:h-80 ">
      </div>
 

        <div class="flex flex-col   justify-around w-full h-full lg:h-1/2 lg:w-1/2  ">
          <h1 class="text-1xl md:text-3xl md:text-left text-center pb-2  font-bold" >Bonjour, je suis Rémy ! <span class="xl:ml-1">👋</span></h1>
          <p class="text-1xl sm:text-2xl md:text-2xl  ">Je suis un développeur web passionné par la création de solutions numériques innovantes. Actuellement, je suis à la recherche d'une alternance pour poursuivre ma formation et développer mes compétences dans le domaine du développement web.</p>
          <div class="flex w-full pt-2 sm:w-2/5 justify-start md:w-2/3 ">
            <a href="#" class="bg-[#3A1D52] text-white text-1xl px-5 py-3 rounded transition-colors duration-300 hover:bg-blue-400 hover:text-gray-200">Me contacter</a>
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