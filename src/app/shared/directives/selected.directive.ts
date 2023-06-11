import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
  standalone:true
})
export class SelectedDirective  implements OnChanges {
  @Input()  appSelected? : boolean
  @HostBinding('style.backgroundColor') private backgroundColor? : string 
  @HostBinding('style.fontWeight') private fontWeight? :string
  @HostBinding('style.color') private color? :string






  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = "white";
      this.color = "red";
      this.fontWeight = "700";
    } else {
      this.backgroundColor = "";
      this.fontWeight = "400";
      this.color = "white";
    }
  }



  constructor() {
    this.appSelected = false;
    this.backgroundColor = 'white';
    this.fontWeight = '400';
    this.color = '';
  }
  

}
