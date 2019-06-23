import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class MaterialModule {}
