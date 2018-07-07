import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatDialogModule,
  MatAutocompleteModule, MatInputModule, MatMenuModule,
  MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
  MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
  MatSlideToggleModule, MatExpansionModule, MatSliderModule } from '@angular/material';


@NgModule({
  imports: [
    MatSelectModule, MatDialogModule, BrowserAnimationsModule,
    MatAutocompleteModule, MatInputModule, MatMenuModule,
    MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
    MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule
  ],
  exports: [
    MatSelectModule, MatDialogModule, BrowserAnimationsModule,
    MatAutocompleteModule, MatInputModule, MatMenuModule,
    MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
    MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule
  ]
})
export class MaterialModule {}