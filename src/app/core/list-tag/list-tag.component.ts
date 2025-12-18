import { Component } from '@angular/core';
import { Tag } from '../../models/tag';
import { TagService } from '../../services/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.css']
})
export class ListTagComponent {
  tags: Tag[] = [];

  constructor(private tagService: TagService, private router: Router) {}

  ngOnInit(){
    this.loadTags();
  }

  loadTags(){
    this.tagService.getTags().subscribe(
      (data: Tag[]) => { this.tags = (data as any).tags ?? data; },
      err => console.error(err)
    )
  }

  goToAdd(){
    this.router.navigateByUrl('/tag/add');
  }

  viewTag(id?: number){
    if(id) this.router.navigateByUrl('/tag/' + id);
  }

  editTag(id?: number){
    if(id) this.router.navigateByUrl('/tag/update/' + id);
  }

  deleteTag(id?: number){
    if(!id) return;
    if(!confirm('Confirmer la suppression du tag ?')) return;
    this.tagService.deleteTag(id).subscribe(
      () => this.loadTags(),
      err => console.error(err)
    )
  }
}