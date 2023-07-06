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
    <h1 class="text-4xl underline decoration-red-400  pb-10 "><span class="text-4xl custom-test">E</span>xperience</h1>
    
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
  year: 2023,
  title: "CDA Concepteur développeur d'application (en cours) ",
  img: "./assets/images/aen-exp.png",
  projet: [
  "Création d'application desktop   ",
  "Concevoir l’architecture technique d’une application à l’aide de diagrammes UML Créer des projets web dynamiques grâce PHP.",
  "Communiquer avec une base de données pour stocker et requêter des informations - Développer de manière professionnelle grâce au framework Symfony.",
  "Mettre en oeuvre des tests unitaires et fonctionnels ainsi qu’utiliser les outils les plus connus d’intégration continue.",
  "Produire une documentation technique et fonctionnelle de l’application.",
],
technology: [
  "assets/logoTech/symfony-white240x240.png",
  "assets/logoTech/php-white240x240 (1).png",
  "assets/logoTech/csharp240x240.png",
  "assets/logoTech/java.jpg",
   
],
       
},
   {
  year: 2022,
  title: "Autoformation Dyma et DWWM(obtenue) ",
  projet: [
    "Projet de jeux de carte manipulation du dom avec stockage en session storage dans le but de généré un crud ",
    "Conception du MCD et du MLD (projet librairie) ",
    "Découverte d'Angular ",
    "Découverte du framework Symfony à travers un projet de question réponse nommé Wonder utilisation des composant (HttpClient,HttpKernel,Validator,Form,Twig,Security) et bundle(MarkerBundle)  "
  ],
  img: "./assets/images/aen-exp.png",
  technology: [
    "./assets/logoTech/mysql-logo.png",
    "./assets/logoTech/node240x240.png",
    "assets/logoTech/symfony-white240x240.png",
    "assets/logoTech/symfony-white240x240.png",

  ],
       
},{
  year: 2021,
  title: "Autoformation Dyma  ",
  projet: [
    " Mise en place de layout à travers différent projets avec l'utilisation des propriétées(Flex,grid,float) mise en place d'architecture avec prépocésseur scss avec l'utilisation de BEM (block element modifier)  ",
    " Utilisation des compétences en HTML, SCSS et JavaScript pour créer un blog interactif. Intégration d'une API REST pour réaliser les opérations CRUD liées aux articles, incluant la récupération, la création, la mise à jour et la suppression",
    " Création de blog avec un CRUD  commencement en procédural évolution vers de la POO utilisation de PDO SGBD avec MySqlworbench mise en place authentification(cookie sécurisé)serveur nginx",

  
  ],
  img: "./assets/images/dyma-exp.png",
  technology: [
    "assets/logoTech/php-white240x240 (1).png",
    "assets/logoTech/html.png",
    "assets/logoTech/javascript.png",
     
  ],
}
        
  ]


    public selectedExperience : Experience = this.experiences[0];

    public selectExperience(index : number) :void
    {

        this.selectedExperience=this.experiences[index];

    }

}