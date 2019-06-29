import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSnackBarModule,
  MatButtonModule
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
    MatIconModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
