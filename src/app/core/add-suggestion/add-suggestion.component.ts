import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { stat } from 'fs';
import { Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrl: './add-suggestion.component.css'
})
export class AddSuggestionComponent {
  categories: string[] = [
  'Infrastructure et bâtiments',
  'Technologie et services numériques',
  'Restauration et cafétéria',
  'Hygiène et environnement',
  'Transport et mobilité',
  'Activités et événements',
  'Sécurité',
  'Communication interne',
  'Accessibilité',
  'Autre'
  ];

  suggestion: Suggestion = {
    id: 0,
    title: '',
    description: '',
    //category: this.categories[0],
    category: null!,
    date: new Date().toISOString().split('T')[0],
    status: 'en_attente',
    nbLikes: 0,
    favorited: false
  };
  

  suggestionForm!: FormGroup;

  constructor(private router: Router, private suggestionService: SuggestionService) {}
  ngOnInit() {    
    this.suggestionForm = new FormGroup({
      title: new FormControl(this.suggestion.title, [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]),
      description: new FormControl(this.suggestion.description, [Validators.required, Validators.minLength(10)]),
      category: new FormControl(this.suggestion.category, Validators.required),
      date: new FormControl(this.suggestion.date),
      status: new FormControl(this.suggestion.status),
      nbLikes: new FormControl(this.suggestion.nbLikes)
    });
  }

  get description() {
    return this.suggestionForm.get('description');
  }

  get category() {
    return this.suggestionForm.get('category');
  }

  addSuggestion(){
    console.log("Suggestion Added:", this.suggestionForm.value);
    this.suggestionService.createSuggestion(this.suggestionForm.value).subscribe(
      (data: Suggestion) => {
        console.log("Suggestion created successfully:", data);
        this.router.navigate(['/suggestions']);
      }
    );
  }
 
}
