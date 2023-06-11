import { Component } from "@angular/core";
import { ExperienceDetails } from "./experience-details/experience-details";
import { ExperienceList } from "./experience-list/experience-list.component";
import { Experience } from "src/app/shared/interfaces/experience.interface";





@Component({
    selector:'experience-container',
    standalone:true,
    template:`
   <div class="w-full  min-h-screen  p-5 bg-[#001233] flex flex-col md:flex-row justify-center">
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
          description: "En 2021, j'ai commencé à apprendre le développement en autodidacte en créant des projets personnels et en suivant des tutoriels en ligne. J'ai approfondi mes connaissances en JavaScript, PHP, HTML et CSS en utilisant la plateforme Dyma, ce qui m'a permis de me préparer pour la suite de mon parcours en tant que développeur. À ce moment-là, mon objectif était de suivre la formation DWWM et de me familiariser avec les bases du web, notamment le fonctionnement des serveurs et les différentes techniques de mise en page en CSS (Flexbox, Grid et Float). ",
          img: "../assets/images/dyma-exp.png",
          projectTechnology: [
            {
              technology: "HTML && CSS",
              project1: "Café florette  site vitrine d'un café utilisation de la propriété Float.",
              project2 :"Site Agence Ledor  vitrine d'une agence immobilière utilisation de flexbox.",
              project3 :"site d'un journal avec utilisation des grid et flexbox.",
            },
           
            {
              technology: "Javascript",
              project1: "Projet de blog en VanillaJs (webpack,ES6,DOM,BOM)",
              project2 :"Cours sur les bases de javascript (ES6,DOM,BOM,fetch,async/await)",
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