import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {
id="";
suggestions!: Suggestion[];
suggestion!: Suggestion;

constructor(private activatedRoute: ActivatedRoute, private router: Router, private suggestionService: SuggestionService) {}
ngOnInit(): void {
  //this.suggestions = this.suggestionService.getSuggestionsList();
  //console.log(this.activatedRoute.snapshot);
  this.id = this.activatedRoute.snapshot.params['id'];
  this.suggestionService.getSuggestionById(Number(this.id)).subscribe(
    (data: any) => {
      this.suggestion = data?.suggestion;
      console.log(this.suggestion);
    }
  )
  //this.suggestion = this.suggestions.find(s => s.id == Number(this.id))!;

}

goToSuggestionList(){
this.router.navigateByUrl('/suggestions');
}

}
