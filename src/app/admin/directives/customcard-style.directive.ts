import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
} from '@angular/core';

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

interface IDatePanel {
  Year: number;
  Month: number;
  Day: number;
}

interface IVideoStylesMap {
  green: number[],
  blue: number[],
  yellow: number[],
  red: number[],
}

const videoStylesMap: IVideoStylesMap = {
  green: [0, 6],
  blue: [7, 29],
  yellow: [30, 179],
  red: [180, Infinity],
};

function createDatePanel(date: Date): IDatePanel {
  return {
    Year: date.getFullYear(),
    Month: date.getMonth(),
    Day: date.getDate(),
  };
}

function calculateDifference(currentDate: Date, publishingDate: Date): number {
  const currentDatePanel = createDatePanel(currentDate);
  const publishingDatePanel = createDatePanel(publishingDate);

  return Math.floor(
    (Date.UTC(currentDatePanel.Year, currentDatePanel.Month, currentDatePanel.Day)
    - Date.UTC(publishingDatePanel.Year, publishingDatePanel.Month, publishingDatePanel.Day)
    ) / MILLISECONDS_IN_DAY,
  );
}

@Directive({
  selector: '[appCustomCardStyle]',
})
export class CustomCardStyleDirective implements OnInit {
  @Input() dateStr: string = '';

  diff = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const currentDate = new Date();
    const publishingDate = new Date(this.dateStr);

    this.diff = calculateDifference(currentDate, publishingDate);

    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', (Object.keys(videoStylesMap).find(
      (key) => (this.diff >= videoStylesMap[key as keyof IVideoStylesMap][0]
        && this.diff < videoStylesMap[key as keyof IVideoStylesMap][1]),
    )));
  }
}
