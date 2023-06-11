import { Component } from '@angular/core';
import { HeaderComponent } from './feature/header/header.component';
import { footerComponent } from './feature/footer/footer.component';
import { landingPageComponent } from './feature/landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  standalone:true,
  template:`
  
    <app-header/>
    <app-footer/>
  `
  ,


  

  imports:[
    HeaderComponent,
    footerComponent,
    landingPageComponent,
   
    
  ]
})
export class AppComponent {
  title = 'portfolio';
 
}


