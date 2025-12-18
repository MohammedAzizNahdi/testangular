import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../../services/tag.service';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.component.html',
  styleUrls: ['./tag-details.component.css']
})
export class TagDetailsComponent { // rebuild
  id!: number;
  tag!: Tag | null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tagService: TagService){}

  ngOnInit(){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tagService.getTagById(this.id).subscribe(
      (data:any) => this.tag = data?.tag ?? data,
      err => console.error(err)
    )
  }

  goBack(){
    this.router.navigateByUrl('/tags');
  }
}