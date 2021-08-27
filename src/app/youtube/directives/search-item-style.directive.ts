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
  @Input() dateStr: string = '';

  diff: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.diff = 0;
  }

  ngOnInit() {
    const currentDate = new Date();
    this.dateStr = this.dateStr.replace('/(T[A-Za-z0-9_-]*/g', '');
    const date = new Date(this.dateStr);
    this.diff = Math.floor((Date.UTC(currentDate.getFullYear(),
      currentDate.getMonth(), currentDate.getDate())
    - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    / (1000 * 60 * 60 * 24));

    if (this.diff < 7) this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    else if (this.diff < 30) this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    else if (this.diff >= 30 && this.diff < 180) this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    else this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }
}
