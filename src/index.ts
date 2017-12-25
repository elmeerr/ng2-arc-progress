import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2ArcProgressComponent } from './ng2-arc-progress.component';


export * from './ng2-arc-progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      Ng2ArcProgressComponent
  ],
  exports: [
      Ng2ArcProgressComponent
  ]
})
export class Ng2ArcProgressModule {
}
