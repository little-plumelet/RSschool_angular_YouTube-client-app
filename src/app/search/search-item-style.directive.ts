import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSearchItemStyle]',
})
export class SearchItemStyleDirective implements OnInit {
  @Input() days: string = '';

  diff: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.diff = Number(this.days);
  }

  ngOnInit() {
    this.diff = Number(this.days);
    if (this.diff < 7) this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    else if (this.diff < 30) this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    else if (this.diff >= 30 && this.diff < 180) this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    else this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }
}
