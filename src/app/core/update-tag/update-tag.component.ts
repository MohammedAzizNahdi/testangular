import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-update-tag',
  templateUrl: './update-tag.component.html',
  styleUrls: ['./update-tag.component.css']
})
export class UpdateTagComponent { // rebuild
  id!: number;
  tagForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tagService: TagService){}

  ngOnInit(){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tagForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(''),
      color: new FormControl('#ffffff'),
      status: new FormControl('active')
    });

    this.tagService.getTagById(this.id).subscribe(
      (data:any) => {
        const tag = data?.tag ?? data;
        this.tagForm.patchValue({
          name: tag.name,
          description: tag.description,
          color: tag.color || '#ffffff',
          status: tag.status || 'active'
        })
      },
      err => console.error(err)
    )
  }

  get name(){ return this.tagForm.get('name'); }

  updateTag(){
    if(this.tagForm.invalid) return;
    this.tagService.updateTag(this.id, this.tagForm.value).subscribe(
      () => this.router.navigate(['/tags']),
      err => console.error(err)
    )
  }
}