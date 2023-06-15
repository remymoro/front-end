import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SelectedDirective } from "src/app/shared/directives/selected.directive";
import { Experience } from "src/app/shared/interfaces/experience.interface";










@Component({
  selector: 'experience-list',
  standalone: true,
  template: `
  
    <div class=" flex justify-center flex-col ">
      <h3 class="mb-4 text-lg font-medium"></h3>
      <ul class="mb-4 space-y-2 mx-auto ">
     
        <li
          class=" text-center rounded-sm cursor-pointer hover:text-white  hover:bg-[#014D7E] transition-colors duration-300 w-36 text-5xl"
          [appSelected]="experience.year === selectedExperience.year"
          (click)="selectExperience(index)"
          *ngFor="let experience of experiences;let index=index"
        >
          {{experience.year }}
        </li>
      </ul>
    </div>
  `,
  imports: [CommonModule,SelectedDirective],
})



export class ExperienceList{

  @Input() experiences?:  Experience[];
  @Input() selectedExperience!: Experience;


  @Output()private changeExperience :EventEmitter<number> = new EventEmitter<number>();

  
  public selectExperience(index:number):void
  {
    this.changeExperience.emit(index);
  }

}