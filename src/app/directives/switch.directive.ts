import { Directive, DoCheck, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hnsSwitch]'
})
export class SwitchDirective {

  @Input('hnsSwitch') switchState: any;
}

@Directive({
  selector: '[hnsSwitchCase]',
})
export class SwitchCaseDirective implements DoCheck {

  @Input('hnsSwitchCase') caseValue: any;

  constructor(@Host() private hnsSwitch: SwitchDirective,
    private vcRef: ViewContainerRef,
    private template: TemplateRef<any>) {
  }

  ngDoCheck() {
    if (this.hnsSwitch.switchState === this.caseValue) {
      this.vcRef.createEmbeddedView(this.template);
    } else {
      this.vcRef.clear();
    }
  }
}
