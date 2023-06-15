import { Component } from "@angular/core";
import { ExperienceDetails } from "./experience-details/experience-details";
import { ExperienceList } from "./experience-list/experience-list.component";
import { Experience } from "src/app/shared/interfaces/experience.interface";





@Component({
    selector:'experience-container',
    standalone:true,
    template:`
  <div class="w-full min-h-screen p-5 bg-[#6A98F0] flex flex-col  ">
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
      "year": 2023,
      "title": "Autoformation via Plateforme",
      "description":"Continuité de parcours sur un CDA (concecpteur d'application web)Continuité de parcours en CDA à travers des modules sur le plan conceptuelle à travers UML, avec avancement de projet en Agilité notament sur un projet en c# WPF .Malheuresement l'organisme de formation à dû fermée. Donc j'aimerais poursuivre car j'aimerais appronfondir avec java même si en parallèle je m'auto-forme via l'application dyma   ",
      "img": "../assets/images/dyma-exp.png",
      "download":[
       {
        
       }
      ],
      "projectTechnology": [
        {
          "technology": "C#",
          "project1": "Projet en console d'application mcdo",
          "project2": "Projet de facturation(Héritage et polymorphisme",
          "project3": "Projet Journal - mise en place d'un journal avec utilisation des grids et SCSS"
        },
        
      ]
    }
    ,
    {
      "year": 2022,
      "title": "Diplôme DWWM",
      "download":[{
         "diplome1":"../assets/diplome/2022/udemy/udemyMerise.pdf",
         "diplome1Name":"Certification(Merise)",
         "diplome2":"../assets/diplome/2022/dyma/certificationPhp.pdf",
         "diplome2Name":"Certification(php)",
         "diplome3":"CertificationSymfony.pdf",
         "diplome3Name":"Certification(Symfony"
      }],
      "description": "J'ai obtenu la certification DWWM (Développeur Web et Web Mobile) dans le but d'approfondir mes connaissances et de valider certaines compétences. Cette formation m'a permis de me familiariser avec l'aspect conception en utilisant le MCD (Modèle Conceptuel de Données) et le MLD (Modèle Logique de Données). J'ai également découvert le langage PHP en utilisant d'abord la version vanilla, puis j'ai utilisé le framework Symfony en formation et durant mon stage pour développer des applications. Du côté client, nous avons utlisé le framewok Angular  ",
      "img": "../assets/images/aen-exp.png",
      "projectTechnology": [
        {
          "technology": "HTML & CSS",
          "project1": "Projet de site vitrine d'un food-truck avec utilisation de SCSS et la méthodologie BEM",
          "project2": "Projet avec utilisation de Bootstrap",
        },
        {
          "technology": "PHP",
          "project1": "Projet de système d'authentification avec utilisation de PDO (PHP Data Objects) et POO (Programmation Orientée Objet)",
          "project2": "Projet de mise en place de la structure MVC (Modèle-Vue-Contrôleur)",
        },
        {
          "technology": "Symfony",
          "project1": "Projet Quora - site de questions-réponses avec Dyma",
          "project2": "Projet de blog dans le cadre d'un tutoriel (utilisation de Vich Uploader, Twig, Doctrine, etc.)",
          "project3": "Projet de E-commerce avec utilisation de Symfony (Doctrine, Form, Validator, Twig, KnpPaginatorBundle, Webpack, Mailer, Stripe, API, etc.)",
        },
        {
          "technology": "MCD & MLD",
          "project1": "Projet de site e-commerce La Boutique Française (Udemy)",
        }
      ]
    },
    {
      "year": 2021,
      "title": "Autoformation via Plateforme",
      "description":"J'ai suivi une formation approfondie sur le développement front-end via la plateforme Dyma. Cette formation m'a permis de maîtriser les langages HTML et CSS, ainsi que les techniques avancées telles que Flexbox, Grid et Float. J'ai également acquis des compétences en JavaScript pur en utilisant l'environnement de développement Webpack et le serveur de développement Webpack Dev Server. J'ai exploité l'API fournie par la plateforme Dyma pour mettre en œuvre des opérations CRUD, notamment la création de formulaires avec l'API Web FormData et l'utilisation de la méthode Fetch pour effectuer des requêtes HTTP asynchrones. À la fin de la formation, j'ai obtenu des certifications en HTML/CSS et en JavaScript. Cette autoformation m'a permis de développer des compétences en développement front-end et de devenir capable de créer des interfaces web interactives et réactives.",
      "img": "../assets/images/dyma-exp.png",
      "download":[
       {
        diplome1:"../assets/diplome/2021/certification-html-css.pdf",
        diplome1Name:"Certification(HTML-CSS)",
        diplome2:"../assets/diplome/2021/certification-js.pdf",
        diplome2Name:"Certification(javascript)"
       }
      ],
      "projectTechnology": [
        {
          "technology": "JavaScript",
          "project1": "Projet de création de liste de tâches avec utilisation du DOM",
          "project2": "Projet de blog avec utilisation de l'API fournie par Dyma (fetch, FormData, etc.)",
        },
        {
          "technology": "HTML & CSS",
          "project1": "Projet Café & Restaurant avec utilisation des floats",
          "project2": "Projet Agence Ledor - agence immobilière avec utilisation des flexbox",
          "project3": "Projet Journal - mise en place d'un journal avec utilisation des grids et SCSS"
        }
      ]
    }
  ];


    public selectedExperience : Experience = this.experiences[0];

    public selectExperience(index : number) :void
    {

        this.selectedExperience=this.experiences[index];

    }

}