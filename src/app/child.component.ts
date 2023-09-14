import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: 'app-child',
  template: `
    <h3>Child-Component</h3>
    <ng-container *ngFor="let item of list">
      <ng-container *ngTemplateOutlet="info; context: { $implicit: item, func: func }"></ng-container>
    </ng-container>
  `,
})
export class ChildComponent {

  @Input() info!: TemplateRef<any>;
  @Input() list!: string[];

  func(item: string) {
    console.log(item);
  }
}
