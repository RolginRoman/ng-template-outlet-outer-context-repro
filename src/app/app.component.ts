import { Component, Directive, Input, Optional } from '@angular/core';

@Directive({
  selector: '[appParent]'
})
export class ParentDirective {
  @Input()
  public appParent: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div appParent="directive value">
      There is a value:
      <app-new></app-new>

      <ng-container *ngTemplateOutlet="component"></ng-container>
    </div>

    <ng-template #component>
      There is no value because of template outlet:
      <app-new></app-new>
    </ng-template>
  `,
})
export class AppComponent {
}

@Component({
  selector: 'app-new',
  template: `
    <p>{{parentDirective ? parentDirective.appParent : 'no value'}}</p>
  `,
})
export class NewComponent {
  constructor(@Optional() public parentDirective: ParentDirective) {
  }
}
