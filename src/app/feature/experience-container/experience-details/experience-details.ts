import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Experience } from "src/app/shared/interfaces/experience.interface";

@Component({
  selector: 'experience-details',
  standalone: true,
  template: `
  <div class="flex w-full  items-center">
      <div class="shadow-lg rounded-lg overflow-hidden  w-full p-5  bg-white">
          <div class="w-full h-full   flex justify-center">
             <img class="w-1/4 h-1/2 " src="{{experience.img}}"/>
          </div>
     <div class="flex flex-col  items-center justify-center">
            <h2 class="text-xs md:text-2xl lg:text-lg  font-bold">{{experience.title}}</h2>
           <div class="border-t h-px  border-0 w-11/12 border-t-blue-700"></div>
    </div>
      <div class=" flex flex-col   ">
            <ul *ngFor="let projet of experience.projet" class=" p-2 w-full list-disc list-inside  ">
             <li class="text-xs sm:text-sm md:text-lg lg:text-lg  list-disc  ">{{projet}}</li>
           </ul>
      </div>
           <div class="border-t h-px  border-0 w-11/12 border-t-blue-700  "></div>
         <div class="flex flex-wrap justify-around w-full mt-5">
           <ul class="w-full flex justify-around ">
             
                  <li *ngFor="let technology of experience.technology" class="  ">
                    <img src="{{technology}}" class="w-12 h-12">
                  </li>
             </ul>
            </div>    
         </div>    



          </div>
  `,
  imports: [
    CommonModule
  ]
})
export class ExperienceDetails {
  @Input() experience!: Experience;


  
 
  



}
