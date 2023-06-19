import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Experience } from "src/app/shared/interfaces/experience.interface";

@Component({
  selector: 'experience-details',
  standalone: true,
  template: `
  <div class="flex w-full  items-center">
      <div class="shadow-lg rounded-lg overflow-hidden min-h-screen w-full  bg-white">
          <div class="w-full  flex justify-center">
             <img class="w-2/5" src="{{experience.img}}"/>
          </div>
     <div class="flex flex-col items-center justify-center">
            <h2 class="text-xs  font-bold">{{experience.title}}</h2>
           <div class="border-t h-px  border-0 w-11/12 border-t-blue-700"></div>
    </div>
      <div class=" flex flex-col  ">
            <ul *ngFor="let projet of experience.projet" class=" p-2 w-full  ">
             <li class="text-xs text-blue-800">{{projet}}</li>
           </ul>
      </div>
         <div class="flex flex-col items-center   ">
           <div class="border-t h-px  border-0 w-11/12 border-t-blue-700"></div>
         <div class="flex flex-wrap justify-around w-full">
           <ul *ngFor="let technology of experience.technology" class="mt-3">
             
                  <li class="bg-blue-600 text-white p-2">{{technology}}</li>
             </ul>
            </div>    
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
