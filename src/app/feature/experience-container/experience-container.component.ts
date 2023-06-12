import { Component } from "@angular/core";
import { ExperienceDetails } from "./experience-details/experience-details";
import { ExperienceList } from "./experience-list/experience-list.component";
import { Experience } from "src/app/shared/interfaces/experience.interface";





@Component({
    selector:'experience-container',
    standalone:true,
    template:`
   <div class="w-full  min-h-screen  p-5 bg-[#99DBF5] flex flex-col md:flex-row justify-center">
  <div class="flex flex-col w-full    md:w-1/2 md:my-0">
    <experience-list class="flex-1" 
    [experiences]="experiences" 
    [selectedExperience]="selectedExperience"
    (changeExperience)="selectExperience($event)" />
  </div>
  <div class="flex flex-col w-full  md:w-1/2 ">
    <experience-details class="flex-1" [experience]="selectedExperience" />
  </div>
</div>


    `,
    imports:[
        ExperienceDetails,
        ExperienceList
    ],
  

})


export class ExperienceContainerComponent{

    public experiences: Experience[] = [
        {
          year: 2021,
          title: "Plateforme Dyma",
          description: "Inscription à",
          img: "../assets/images/dyma-exp.png",
          projectTechnology: [
            {
              technology: "",
              project1: "",
              project2 :"",
              project3 :"",
            },
           
            {
              technology: "",
              project1: "",
              project2 :"",
            },
           
           
           
          ]
        },
        {
          year: 2022,
          title: "Diplôme DWWM",
          description: "J'ai suivi une formation à l'école INTECH dans le cadre du diplôme DWWM. Cette formation m'a permis d'approfondir mes connaissances en PHP et de me familiariser avec le framework Symfony. J'ai également appris la conception de bases de données grâce à la partie MCD - MLD de la formation. De plus, j'ai eu l'opportunité de suivre un stage de deux mois dans la création de site e-commerce, ce qui m'a permis de découvrir Symfony et ses bundles. ." ,
          img: "../assets/images/aen-exp.png",
          projectTechnology: [
            {
              technology: "HTML && CSS",
              project1: "TP projet site vitrine d'un food-truck utilisation de scss et le (BEM).",
              project2: "TP projet avec utilisation de bootstrap.",
            },
            {
              technology: "PHP",
              project1: "Projet système d'authentification utilisation de PDO et POO.",
              project2: "Projet de mise en place de la structure MVC.",
            },
            {
              technology: "Symfony",
              project1: "Projet Quora site de question réponse avec Dyma",
              project2: "Projet de blog dans le cadre de tuto (vich uploader,twig,doctrine, .",
              project3: "Projet de E-commerce avec utilisation de symfony (Doctrine,Form,Validator,twig,knp,webpack,mailer,stripe,api,paginator,LiipImagineBundle))",
            },
            {
              technology: "MCD && MLD",
              project1: "Projet de site e-commerce La boutique française (udemy)",
            }
            
            
           
          ]
        },
    
        {
          year: 2023,
          title: "Diplôme CDA (en cours)",
          description: "Continuité de parcours dans le cadre de la formation CDA(concepteur d'application) introduisant différent language(C#,JAVA,PHP)  ",
          img: "../assets/images/aen-exp.png",
          projectTechnology: [
            
          ]
        },
      ];
      


    public selectedExperience : Experience = this.experiences[0];

    public selectExperience(index : number) :void
    {

        this.selectedExperience=this.experiences[index];

    }

}