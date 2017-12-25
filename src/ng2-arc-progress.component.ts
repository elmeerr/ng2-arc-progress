import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'ng2-arc-progress',
  templateUrl: './ng2-arc-progress.component.html',
  styleUrls: ['./ng2-arc-progress.component.css']
})
export class Ng2ArcProgressComponent implements OnInit, OnChanges {
  @Input() size: number;
  @Input() gap: number;
  @Input() progress = 0;
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() strokeWidth: number;

  arcRadius: number;
  arcSize: number;
  arcStart: number;
  arcStrokeWidth: number;
  positionX: number;
  positionY: number;
  strokeDashArray: number;
  strokeDashOffSet: number;
  fillValue: number;
  range: number;
  arcBackgroundColor: string;
  arcProgressColor: string;

  constructor() {
  }

  ngOnInit() {
    this.initArc();
  }

  ngOnChanges() {
    this.initArc();
  }

  initArc() {
    this.arcBackgroundColor = this.backgroundColor ? this.backgroundColor : 'lightgrey';
    this.arcProgressColor = this.progressColor ? this.progressColor : 'blue';
    this.arcStrokeWidth = this.strokeWidth ? this.strokeWidth : 1;
    this.arcSize = this.size ? this.size : 300;
    this.arcRadius = (45 * this.arcSize) / 100;
    this.arcStart = this.gap ? 180 - this.gap : 90;
    this.positionX = this.arcSize / 2;
    this.positionY = this.arcSize / 2;
    this.range = (this.arcStart / 88);
    this.strokeDashArray = this.arcRadius * Math.PI * this.range;
    this.strokeDashOffSet = (this.arcRadius * Math.PI * this.range * -1);
    this.fillValue = ((this.progress * this.strokeDashArray) / 100) + this.strokeDashOffSet;
  }

  drawnArc(x, y, radius, startAngle, endAngle) {
    endAngle = endAngle - 0.0001;
    /*to be able to draw a full circle*/
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');

    return d;
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
}
