# Custom Window component

This example demonstrates how to create a custom window component by wrapping the kendo window component, both in Angular and AngularJS.

## Component overview

We will build a window component with the following properties and events:

- title (string) - the text shown in the window header bar
- width (integer) - the width in pixels
- height (integer) - the height in pixels
- top (integer) - the initial top position in pixels
- left (integer) - the initial left position in pixels
- html (string) - the inner content of the window
- close - event fired on window close

## Setup (Angular)

1. Copy `custom-window/` folder inside `templates/components/` folder of your project

2. Inside `app/src/app/shared/` create `custom-components` folder. Inside this folder create a folder with the name of your component, in this case its name is `custom-window`. Here will reside the Angular template and controller.

custom-window.component.html:

```html
<kendo-window
    [top]="config.top"
    [left]="config.left"
    [width]="config.width"
    [height]="config.height"
    [title]="config.title"
    (close)="closeHandler()"
    *ngIf="config.show">
    <ng-content></ng-content>
</kendo-window>
```

custom-window.component.ts:

```ts
import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-window',
    templateUrl: './custom-window.component.html',
})
export class CustomWindow {
    @ViewChild('ref') public ref: ElementRef;
    @Input() public config: any;
    @Output() close: EventEmitter<null> = new EventEmitter();

    closeHandler() {
        this.close.emit(null);
        this.config.show = false;
    }
}

```

3. Now you need to register the component in Angular.

app/src/app/shared/shared.module.ts:

```ts
import { NgModule } from '@angular/core';
import { config } from './shared.config';

// You can modify or replace module config here
import { WindowModule } from '@progress/kendo-angular-dialog';
import { CustomWindow } from './custom-components/custom-window/custom-window.component';

config.declarations.push(CustomWindow);
config.imports.push(WindowModule);
config.exports.push(CustomWindow, WindowModule);

@NgModule(config)
export class SharedModule { }
```

## Setup (AngularJS)

1. Copy `custom-window/` folder inside `templates/components/` folder of your project


2. Inside `app/src/scripts/extensions/` create a folder with the name of your component, in this case its name is `custom-window`. Here will reside the AngularJS template and controller.

index.js

```js
'use strict';

import template from './template.html';

function directive() {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            id: '@',
            widget: '=',
            options: '=',
            events: '=',
        },
        transclude: true,
        controller: function() {
            var vm = this;
        },
        controllerAs: 'vm',
        templateUrl: template
    };
}

export default directive;
```

```html
<div id="{{vm.id}}"
    kendo-window="vm.widget"
    k-options="vm.options"
    k-on-close="vm.events.onClose(kendoEvent)">
    <ng-transclude></ng-transclude>
</div>
```

3. Register the component in AngularJS.

app/src/scripts/extensions/index.js

```js
'use strict';

import angular from 'angular';

// Import your custom modules here:
import customWindow from './custom-window/index.js';

export default angular.module('app.extensions.module', [
    // Put your custom modules here:
])
.directive('customWindow', customWindow)
.name;
```