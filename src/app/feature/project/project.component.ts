import { Component, HostListener } from "@angular/core";

@Component({
    selector: "app-project",
    template: `
        <div class="w-full  bg-[#6A98F0]">
         <div class="flex justify-center  lg:flex-row lg:w-1/3 lg:justify-self-auto ">
            <h1 class="text-4xl underline decoration-red-400  pb-10 "><span class="text-6xl custom-test">M</span>es projets</h1>
    
          </div>
            <div class="md:w-1/2 sm: mx-auto p-5 w-full">
                <div class="  ">
                    <div class="flex items-center ">
                        <div class="shadow-lg rounded-lg overflow-hidden w-full bg-white">
                            <div class="flex flex-col shadow-lg dark:bg-neutral-700">
                                <div class="w-full flex justify-center p-1 ">
                                    <img class="object-cover  w-full  h-56" src="../assets/images/Projet2.jpeg" alt="" />
                                </div>
                                <div class="flex flex-col justify-start p-7">
                                    <h5 class="mb-2 font-mono text-2xl">
                                    Chez Melo (food-truck)
                                    </h5>
                                   
                                    <p class="text-sm mb-2 text-neutral-500 dark:text-neutral-300">
                                    Le projet DWWM vise à créer une architecture front-end en utilisant BEM, SCSS et les fonctionnalités de CSS3 pour développer un système de like sans JavaScript. BEM permet d'organiser le code CSS de manière modulaire en utilisant des blocs, des éléments et des modificateurs, ce qui facilite la maintenance et la réutilisation du code. SCSS offre des fonctionnalités avancées comme les variables et les mixins, améliorant ainsi l'efficacité de l'écriture du code CSS.
                                   <a class="underline" href="https://openclassrooms.com/fr/courses/6106181-simplifiez-vous-le-css-avec-sass/6595809-creez-des-selecteurs-html-avec-la-methodologie-bem">Liens openclassrooms</a>
                                    </p>
                                    <div class=" p-5 flex justify-end">
                                        <a  class="bg-pink-500 text-white cursor-pointer font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md " (click)="onNavigate()" >En savoir plus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- <div class=" box mt-4">
                    <div class="flex items-center ">
                        <div class="shadow-lg rounded-lg overflow-hidden w-full bg-white">
                            <div class="flex flex-col shadow-lg dark:bg-neutral-700">
                                <div class="w-full flex justify-center p-1 ">
                                    <img class="object-cover  w-full  h-56" src="../assets/images/projet2.jpeg" alt="" />
                                </div>
                                <div class="flex flex-col justify-start p-7">
                                    <h5 class="mb-2 font-mono text-2xl">
                                        Projet : 1
                                    </h5>
                                    <p class="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                                        Agence ledor
                                    </p>
                                    <p class="text-sm mb-2 text-neutral-500 dark:text-neutral-300">
                                    Premier de la formation sur les flex 

                                    </p>
                                    <div class=" p-5 flex justify-end">
                                        <a  class=" text-white cursor-pointer font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md " (click)="onNavigate()" >En savoir plus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>
                 -->
              
       
    `,
    styles: [`
        .box {
            opacity: 0;
            
            transform: translateY(50px);
            transition: opacity 1s, transform 1s;
        }
        .box.show {
            opacity: 1;
            transform: translateY(0);
        }
    `]
})

export class ProjectComponent {

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerBottom = (window.innerHeight / 10) * 4;

            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }






    onNavigate() {
        window.location.href = 'https://reverent-mestorf-5aba8c.netlify.app/';
      }

}
