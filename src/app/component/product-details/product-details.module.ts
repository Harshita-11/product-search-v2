import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';

import { MaterialModule } from 'src/app/material.module';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { CardComponent } from '../card/card.component';
import { FormatLabelPipe } from 'src/app/pipes/format-label.pipe';

@NgModule({
  declarations: [CardComponent, FormatLabelPipe, ProductDetailsComponent],
  imports: [CommonModule, MaterialModule, ProductDetailsRoutingModule],
  exports: [CardComponent, CommonModule, MaterialModule]
})
export class ProductDetailsModule {}
