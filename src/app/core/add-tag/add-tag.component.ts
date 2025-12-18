import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent { // rebuild
  tagForm!: FormGroup;

  constructor(private tagService: TagService, private router: Router){}

  ngOnInit(){
    this.tagForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(''),
      color: new FormControl('#ffffff'),
      status: new FormControl('active')
    });
  }

  get name(){ return this.tagForm.get('name'); }

  addTag(){
    if(this.tagForm.invalid) return;
    this.tagService.createTag(this.tagForm.value).subscribe(
      () => this.router.navigate(['/tags']),
      err => console.error(err)
    )
  }
}