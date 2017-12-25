import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Ng2ArcProgressComponent} from './ng2-arc-progress.component';

describe('Ng2ArcProgressComponent', () => {
  let component: Ng2ArcProgressComponent;
  let fixture: ComponentFixture<Ng2ArcProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ng2ArcProgressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ArcProgressComponent);
    component = fixture.componentInstance;
    component.size = 400;
    component.progress = 50;
    component.strokeWidth = 4;
    component.backgroundColor = 'red';
    component.progressColor = 'blue';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should have size equal to 400', () => {
    expect(component.arcSize).toBe(400);
  });
  it('should have default radius', () => {
    expect(component.arcRadius).toBe((45 * component.arcSize) / 100);
  });
  it('should have default gap', () => {
    expect(component.arcStart).toBe(90);
  });
  it('should be centralized', () => {
    expect(component.positionX).toBe(component.arcSize / 2);
    expect(component.positionY).toBe(component.arcSize / 2);
  });
  it('should fill 50% percent', () => {
    expect(component.fillValue).toBe(((component.progress * component.strokeDashArray) / 100) + component.strokeDashOffSet);
  });
  it('should have background red', () => {
    expect(component.arcBackgroundColor).toBe('red');
  });
  it('should have progress blue', () => {
    expect(component.arcProgressColor).toBe('blue');
  });
  it('should have stroke equal 4', () => {
    expect(component.arcStrokeWidth).toBe(4);
  });
});
