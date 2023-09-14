import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hnsIf]'
})
export class IfDirective {

  private embedded!: EmbeddedViewRef<any>;

  @Input('hnsIf') set flag(value: boolean) {
    if (value) {
      this.embedded = this.vcRef.createEmbeddedView(this.template);
    } else if (!!this.embedded){
      this.embedded.destroy();
    }
   }

  constructor(private vcRef: ViewContainerRef,
    private template: TemplateRef<any>) {

  }

}

