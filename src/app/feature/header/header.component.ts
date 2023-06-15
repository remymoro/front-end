import {Component, ElementRef, HostBinding, HostListener} from "@angular/core"
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";


@Component({
    selector:'app-header',
    standalone:true,
    template:`
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-4 bg-[#6A98F0] ">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full  relative flex justify-between lg:w-72  px-4 lg:static lg:block lg:justify-start">
        <a class="w-full md:justify-between   flex  items-center" routerLink="" routerLinkActive="" [routerLinkActiveOptions]="{exact:true}">
          <img class="w-28 h-auto rounded-full" src="../assets/images/Logo.png">
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" (click)="toggleNavbar($event)">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      </div>
      <div [class.hidden]="hideMenu" [class.flex]="showMenu" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"  routerLink="experience" routerLinkActive="border-b-2  border-[#0E2954] " >
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span class="ml-2">Mes experiences</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center  text-xl uppercase font-bold leading-snug text-white hover:opacity-75" routerLink="project" routerLinkActive="border-b-2  border-[#0E2954] " >
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span class="ml-2">Mes Projets</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75 "  routerLink="contact" routerLinkActive="border-b-2  border-[#0E2954] " >
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span class="ml-2">Contact</span>
            </a>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center  text-xl uppercase font-bold leading-snug text-white hover:opacity-75"  routerLink="technology" routerLinkActive=" border-b-2  border-[#0E2954]  " >
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span class="ml-2">veille technologie</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    <router-outlet/>
   
        ` ,

        imports:[
          RouterOutlet,
          RouterLink,
          RouterLinkActive
        ]
  
  
    

})


export class HeaderComponent{

  
  @HostBinding() hideMenu = true;
  showMenu:boolean = false;
  
   
  

  // @HostListener('window:resize',['$event'])
  toggleNavbar(event:Event) {
    this.hideMenu = !this.hideMenu;
    
    this.showMenu = this.showMenu;
    
   

 
  }
    





}

