import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionDetailsComponent } from './core/suggestion-details/suggestion-details.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { provideHttpClient } from '@angular/common/http';
import { UpdateSuggestionComponent } from './core/update-suggestion/update-suggestion.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListTagComponent } from './core/list-tag/list-tag.component';
import { AddTagComponent } from './core/add-tag/add-tag.component';
import { UpdateTagComponent } from './core/update-tag/update-tag.component';
import { TagDetailsComponent } from './core/tag-details/tag-details.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
//import { AnnonceModule } from './annonce/annonce.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    HomeComponent,
    NotFoundComponent,
    SuggestionDetailsComponent,
    AddSuggestionComponent,
    UpdateSuggestionComponent,
    AddUserComponent,
    ListUserComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    ListTagComponent,
    AddTagComponent,
    UpdateTagComponent,
    TagDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // AnnonceModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
