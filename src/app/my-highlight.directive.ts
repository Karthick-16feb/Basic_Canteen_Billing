import { Directive , ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[MyHighlight]'
})
export class MyHighlightDirective {

  
  @Input() Myhighlight:string="";
  constructor(private ele :ElementRef){}


   @HostListener('mouseover')
   high()
   {
    this.ele.nativeElement.style.backgroundColor = "blue"  ;
   }

   @HostListener('mouseout')
   rehigh()
   {
    this.ele.nativeElement.style.backgroundColor =this.Myhighlight;
   }


}
