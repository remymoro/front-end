import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Experience } from "src/app/shared/interfaces/experience.interface";

@Component({
  selector: 'experience-details',
  standalone: true,
  template: `
   <div class="flex w-full  items-center">
  <div class="shadow-lg rounded-lg overflow-hidden min-h-screen w-full bg-[#FEEBD1]">
    <div class="flex flex-col dark:bg-neutral-700">
      <div class="w-full text-center flex justify-center">
        <img class="object-cover h-32" src="{{experience.img}}" alt="image-experience" />
      </div>
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-2xl">{{experience.title}}</h5>
        <div class="border-t p-1 border-t-red-700"></div>
        <p class="mb-2 text-base text-neutral-600 dark:text-neutral-200">{{experience.description}}</p>
        <p class="text-2xl mb-2 text-center text-gray-700 dark:text-neutral-300">Les projets réalisés</p>
        <div class="grid grid-cols-1 gap-5 overflow-hidden">
          <div *ngFor="let project of experience.projectTechnology" class="flex flex-col">
            <p class="text-sm mt-2 text-center text-red-600 font-bold">{{ project.technology }}</p>
            <div class="border-t p-2 border-t-red-700"></div>
            <p class="text-base mt-1">{{ project.project1 }}</p>
            <p class="text-base">{{ project.project2 }}</p>
            <p class="text-base">{{ project.project3 }}</p>
            <a href="assets/cv/diplome-dwwm.pdf" download>Télécharger mon CV</a>
          </div>
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
