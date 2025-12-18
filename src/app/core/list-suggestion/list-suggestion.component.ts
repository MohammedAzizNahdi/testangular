import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
suggestions!: Suggestion[];

favoriteSuggestions: Suggestion[] = [];
searchTerm: string = '';

constructor(private suggestionService: SuggestionService) {}

ngOnInit() {
  //this.suggestions = this.suggestionService.getSuggestionsList();
  this.suggestionService.getSuggestions().subscribe( 
    (data: Suggestion[]) => {
      this.suggestions = data;
    }
  )
}

nbLikesuggestion(suggestion: Suggestion) {
  if (suggestion.nbLikes !== undefined) {
    suggestion.nbLikes++;
    //console.log("Likes:", suggestion);
    this.suggestionService.updateSuggestion(suggestion.id, suggestion).subscribe(
      (data: Suggestion) => {
        console.log("Suggestion likes updated successfully:", data);
      }
    )
  }
}

addToFavorites(suggestion: Suggestion) {
  if (!this.favoriteSuggestions.includes(suggestion)) {
    this.favoriteSuggestions.push(suggestion);
    suggestion.favorited = true;
  }
}

deleteSuggestion(suggestion: Suggestion) {
  this.suggestionService.deleteSuggestion(suggestion.id).subscribe(
    () => {
      this.suggestions = this.suggestions.filter(s => s.id !== suggestion.id);
    }
  )
}
}
