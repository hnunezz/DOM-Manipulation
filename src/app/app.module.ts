import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirective } from './directives/if.directive';

import { ChildComponent } from './child.component';
import { ForDirective } from './directives/for.directive';
import { SwitchCaseDirective, SwitchDirective } from './directives/switch.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    ChildComponent,
    ForDirective,
    SwitchDirective,
    SwitchCaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
