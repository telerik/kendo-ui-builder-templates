# Arc Gauge Component
This custom component gives you the opportunity to present a numeric value on a circular arc. [Kendo Angular ArcGauge Component](https://www.telerik.com/kendo-angular-ui/components/gauges/arcgauge) is wrapped.

## Setup
1. Add `@progress/kendo-angular-gauges` package to your project.
  - Create package.json file in %your-app-folder%/artifacts/package.json if not exists. Then add the following line to dependecies section: `"@progress/kendo-angular-gauges": "^2.3.0"`.
  - If the file %your-app-folder%/artifacts/package.json doesn't exist create it and add the following content:

```json
{
    "dependencies": {
        "@progress/kendo-angular-gauges": "^2.3.0"
    }
}
```

2. Copy `arc-gauge` folder

The folder containg custom component files for kendo-gauge should be copied to `%your-app-folder%/templates/components` folder.

3. Component Definition

- Create a folder inside app/src/app/shared next to the components/ folder and name it, for example, custom-components.
- Inside this folder, create a folder for our gauge component - arc-gauge.
- In custom-components/arc-gauge/arc-gauge.component.html add:

```html
<kendo-arcgauge
    [scale]="config.scale"
    [value]="value">
    <ng-template kendoArcGaugeCenterTemplate let-value="value">
        {{ value }}
    </ng-template>
</kendo-arcgauge>
```

- In custom-components/arc-gauge/arc-gauge.component.ts add:

```ts
import { Component, Input } from '@angular/core';

@Component({
   selector: 'kb-arc-gauge',
   templateUrl: './arc-gauge.component.html'
})
export class ArcGaugeComponent {
   @Input() public config;
   @Input() public value;
}
```

4. Import ArcGaugeModule

Open your project with code editor and locate the file: shared.module.ts. Add the following code snippet to after the comment line:

```ts
import { ArcGaugeModule } from '@progress/kendo-angular-gauges';

config.imports.push(ArcGaugeModule);
config.exports.push(ArcGaugeModule);

import { ArcGaugeComponent } from './custom-components/arc-gauge/arc-gauge.component';

config.declarations.push(ArcGaugeComponent);
config.exports.push(ArcGaugeComponent);
```

5. Drag and drop your Arc Gauge component to any blank view and preview the app.
