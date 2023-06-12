import { Component, HostListener } from "@angular/core";

@Component({
    selector: "app-project",
    template: `
        <div class="w-full  bg-[#99DBF5]">
            <div class="md:w-1/2 sm: mx-auto p-5 w-full">
                <div class="  ">
                    <div class="flex items-center ">
                        <div class="shadow-lg rounded-lg overflow-hidden w-full bg-[#FEEBD1]">
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
                                        <a  class="bg-pink-500 text-white cursor-pointer font-semibold px-6 py-3 rounded-md border-2 border-white shadow-md " (click)="onNavigate()" >En savoir plus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class=" box mt-4">
                    <div class="flex items-center ">
                        <div class="shadow-lg rounded-lg overflow-hidden w-full bg-[#FEEBD1]">
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
        window.location.href = 'https://playful-stardust-2871ac.netlify.app';
      }

}
