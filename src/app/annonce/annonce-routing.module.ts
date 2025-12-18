import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { AnnonceAddComponent } from './annonce-add/annonce-add.component';

const routes: Routes= [
  { path: '',  component: AnnonceComponent,
    children:[
      { path: 'list', component: AnnonceListComponent },
      { path: 'add', component: AnnonceAddComponent}
    ]
   }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AnnonceRoutingModule { }
