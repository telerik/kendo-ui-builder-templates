# Material Table Component
This custom component gives you the opportunity to present data in table with Material design. [Material Table Component](https://material.angular.io/components/table/overview) is wrapped.

## Setup
1. Add `@angular/cdk` and `@angular/material` packages to your project.
  - Create package.json file in %your-app-folder%/artifacts/package.json if not exists. Then add the following line to dependecies section: `"@angular/cdk": "^5.2.4"` and `"@angular/material": "^5.2.4"`.
  - If the file %your-app-folder%/artifacts/package.json doesn't exist create it and add the following content:

```json
{
    "dependencies": {
        "@angular/cdk":"^5.2.4",
        "@angular/material": "^5.2.4"
    }
}
```

2. Add the following line to `app.custom.css`:

```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

3. Copy `material-table` folder

The folder containg custom component files for material-table should be copied to `%your-app-folder%/templates/components` folder.

4. Component/Directive Definition

- Create a folder inside app/src/app/shared next to the components/ folder and name it, for example, custom-components.
- Inside this folder, create a folder for our material-table component - material-table.
- In custom-components/material-table/material-table.component.html:

```html
<ng-content></ng-content>
```

- In custom-components/material-table/material-table.component.ts:

```ts
import { Component, Input } from '@angular/core';

@Component({
    selector: 'kb-material-table',
    templateUrl: './material-table.component.html'
 })
export class KbMatDataTableComponent {
    @Input() public config: any;
}
```

4. Import MatTableModule

Open your project with code editor and locate the file: shared.module.ts. Add the following code snippet to after the commend line:

```ts

import { KbMatDataTableComponent } from './custom-components/material-table/material-table.component';

config.declarations.push(KbMatDataTableComponent);
config.exports.push(KbMatDataTableComponent);

import { MatTableModule } from '@angular/material';

config.imports.push(MatTableModule);
config.exports.push(MatTableModule);

```

5. Drag and drop your material table component to any blank view and bind it to data source.
