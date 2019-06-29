import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './lazymodule-routing';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [RouterModule.forChild(routes)]
})
export class LazymoduleModule {}
