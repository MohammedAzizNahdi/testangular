import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionDetailsComponent } from './core/suggestion-details/suggestion-details.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { UpdateSuggestionComponent } from './core/update-suggestion/update-suggestion.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListTagComponent } from './core/list-tag/list-tag.component';
import { AddTagComponent } from './core/add-tag/add-tag.component';
import { UpdateTagComponent } from './core/update-tag/update-tag.component';
import { TagDetailsComponent } from './core/tag-details/tag-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'suggestions', component: ListSuggestionComponent },
  { path:'suggestion/add', component: AddSuggestionComponent },
  { path:'suggestion/update/:id', component: UpdateSuggestionComponent },
  { path:'suggestion/:id', component: SuggestionDetailsComponent },
  { path:'tags', component: ListTagComponent },
  { path:'tag/add', component: AddTagComponent },
  { path:'tag/update/:id', component: UpdateTagComponent },
  { path:'tag/:id', component: TagDetailsComponent },
  { path:'user/list', component: ListUserComponent},
  { path:'user/add', component: AddUserComponent},
  { path:'user/details/:id', component: UserDetailsComponent},
  { path:'user/update/:id', component: UpdateUserComponent},
  { path:'annonce', loadChildren: () => import('./annonce/annonce.module').then(m => m.AnnonceModule) },
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
