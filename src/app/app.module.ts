import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChooseDateComponent } from './choose-date/choose-date.component';
import { SaveDetailsComponent } from './save-details/save-details.component';


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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
