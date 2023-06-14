import { Component } from "@angular/core";
import { ExperienceDetails } from "./experience-details/experience-details";
import { ExperienceList } from "./experience-list/experience-list.component";
import { Experience } from "src/app/shared/interfaces/experience.interface";





@Component({
    selector:'experience-container',
    standalone:true,
    template:`
  <div class="w-full min-h-screen p-5 bg-[#99DBF5] flex flex-col  ">
    <div class="flex justify-center  lg:flex-row lg:w-1/3 lg:justify-self-auto ">
    <h1 class="text-4xl underline decoration-red-400  pb-10 "><span class="text-6xl custom-test">E</span>xperience</h1>
    
</div>
     <div class="lg:flex-row lg:flex lg:h-full  ">
       <div class="w-full  lg:h-full lg:w-2/6   md:my-0">
          <experience-list class="flex-1 lg:h-full   " 
           [experiences]="experiences" 
           [selectedExperience]="selectedExperience"
           (changeExperience)="selectExperience($event)" />
       </div>
        <div class="flex flex-col mx-auto  md:w-full  lg:w-1/2 ">
           <experience-details 
           class="flex-1 lg:w-full" [experience]="selectedExperience"
           />
       </div>
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
        "year": 2021,
        "title": "Autoformation via Plateforme",
        "description": "Formation front-end avec BEM (SCSS) et JavaScript pour créer des projets pratiques : liste de tâches, blog CRUD et CV avec grilles. Maîtrise HTML & CSS (float, flexbox, grilles). Environnement de développement avec Webpack. Compétences solides pour développer des sites web interactifs, manipuler les éléments de la page et interagir avec des API. Focus sur l'architecture BEM pour une maintenance et une réutilisabilité améliorées. Autoformation progressive pour renforcer les compétences en développement front-end.",
        "img": "../assets/images/dyma-exp.png",
        "projectTechnology": [
          {
            "technology": "JavaScript",
            "project1": "Liste de tâches",
            "project2": "Blog CRUD",
            "project3": "Environnement Webpack"
          },
          {
            "technology": "HTML & CSS",
            "project1": "Café & restaurant (float)",
            "project2": "CV avec flexbox (Agence Ledor)",
            "project3": "CV avec grilles"
          }
        ]
      }
      
      
      ,
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