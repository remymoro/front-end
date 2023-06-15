import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Experience } from "src/app/shared/interfaces/experience.interface";

@Component({
  selector: 'experience-details',
  standalone: true,
  template: `
   <div class="flex w-full  items-center">
  <div class="shadow-lg rounded-lg overflow-hidden min-h-screen w-full p-4 bg-white">
    <div class="flex flex-col dark:bg-neutral-700">
      <div class="w-full text-center flex justify-center">
        <img class="object-cover h-32" src="{{experience.img}}" alt="image-experience" />
      </div>
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-2xl">{{experience.title}}</h5>
       
        <div class="border-t p-1 border-t-red-700"></div>
        <p class="mb-2  lg:text-lg">{{experience.description}}</p>
        <p class="text-3xl mb-2 text-center   ">Les projets réalisés</p>
        <div class="grid grid-cols-1 gap-5 overflow-hidden">
          <div *ngFor="let project of experience.projectTechnology" class="flex flex-col ">
            <p class="text-sm mt-2 text-center font-bold">{{ project.technology }}</p>
            <p class=" lg:text-lg  mt-1">{{ project.project1 }}</p>
            <p class=" lg:text-lg">{{ project.project2 }}</p>
            <p class=" lg:text-lg">{{ project.project3 }}</p>
          </div>
          <p class="text-center  font-bold">Certification</p>
          <div class="border-t p-1 border-t-red-700"></div>
          <div class="flex flex-wrap justify-around w-full md:w-3/5 b lg:w-full">
         <ng-container *ngFor="let Diplome of experience.download, let index; ">
          <a *ngIf="Diplome?.diplome1 && Diplome?.diplome1Name" class="bg-blue-400 text-white text-xs px-2 py-3 rounded transition-colors duration-300 hover:bg-[#3A1D52] hover:text-gray-200" href="{{ Diplome.diplome1 }}" download>{{ Diplome.diplome1Name }}</a>
          <a *ngIf="Diplome?.diplome2 && Diplome?.diplome2Name" class="bg-blue-400 text-white text-xs px-2 py-3 rounded transition-colors duration-300 hover:bg-[#3A1D52] hover:text-gray-200" href="{{ Diplome.diplome2 }}" download>{{ Diplome.diplome2Name }}</a>
          <a *ngIf="Diplome?.diplome3 && Diplome?.diplome3Name" class="bg-blue-400 text-white text-xs px-2 py-3 rounded transition-colors duration-300 hover:bg-[#3A1D52] hover:text-gray-200" href="{{ Diplome.diplome3 }}" download>{{ Diplome.diplome3Name }}</a>
         </ng-container>
        </div  >


        </div>
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
