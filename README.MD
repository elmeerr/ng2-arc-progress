# ng2-arc-progress

## Installation

To install this library, run:

```bash
$ npm install angular2-arc-progress --save
```

## Consuming the library

You can import the library in any Angular application from your Angular `AppModule` (or any module you want):

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { N2ArcProgressModule } from 'angular2-arc-progress';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import
    N2ArcProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then you can use its component in your Angular application:

```
<h1>
  Arc progress angular
</h1>
<ng2-arc-progress></ng2-arc-progress>
```

## Properties

``size``: size of the arc (_width_ x _height_)  
``gap``: gap in the circle given in degrees from 90 to 180.  
    - 90 = Half circle  
    - 180 = Full circle  
``progress``: progress percentage (0 to 100)  
``backgroundColor``: background color of the arc  
``progressColor``: color of the progress bar  
``strokeWidth``: stroke width of the arc.  

## License

MIT © [Elmer Dantas](mailto:elmer.dantas@gmail.com)
