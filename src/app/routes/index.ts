import { Routes } from "@angular/router";
import { ExperienceContainerComponent } from "../feature/experience-container/experience-container.component";
import { landingPageComponent } from "../feature/landing-page/landing-page.component";
import { ContactComponent } from "../feature/contact/contact-component";
import { ProjectComponent } from "../feature/project/project.component";
import { VeilleTechnology } from "../feature/veille-technologique/veille-technologie";
import { SuccessComponent } from "../feature/success/success.component";
import { NotFoundComponent } from "../feature/error/not-found.component";




const route : Routes =[


    {
        path:'experience',
        component:ExperienceContainerComponent,
        
    },
    {
        path:'',
        component:landingPageComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'project',
        component:ProjectComponent
    },
    {
        path:'technology',
        component:VeilleTechnology
    },
    { path: "**", component: NotFoundComponent },
   
]


export default route;