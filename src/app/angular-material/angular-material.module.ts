import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [ CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatGridListModule, MatDividerModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatGridListModule, MatDividerModule],
  declarations: []
})
export class AngularMaterialModule { }
