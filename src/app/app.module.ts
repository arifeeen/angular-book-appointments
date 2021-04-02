import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChooseDateComponent } from './choose-date/choose-date.component';
import { SaveDetailsComponent } from './save-details/save-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{
  path: 'book',
  component: ChooseDateComponent
},
{
  path: 'saveDetails/:id',
  component: SaveDetailsComponent
},
{
  path: '',
  redirectTo: 'book',
  pathMatch: 'full'

}]
@NgModule({
  declarations: [
    AppComponent,
    ChooseDateComponent,
    SaveDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
