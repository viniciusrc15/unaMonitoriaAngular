import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {
  MatSelectModule, MatDialogModule,
  MatAutocompleteModule, MatInputModule, MatMenuModule,
  MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
  MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
  MatSlideToggleModule, MatExpansionModule, MatSliderModule, MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [
    MatSelectModule, MatDialogModule, BrowserAnimationsModule, CdkTableModule, CdkTreeModule, A11yModule,
    MatAutocompleteModule, MatInputModule, MatMenuModule,
    MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
    MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule, MatSnackBarModule
  ],
  exports: [
    MatSelectModule, MatDialogModule, BrowserAnimationsModule, CdkTableModule, CdkTreeModule, A11yModule,
    MatAutocompleteModule, MatInputModule, MatMenuModule,
    MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
    MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule, MatSnackBarModule
  ]
})
export class MaterialModule { }
