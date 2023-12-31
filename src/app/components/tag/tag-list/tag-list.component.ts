import { Component } from '@angular/core';
import { ITag } from '../../../models/tag.model';
import { TagService } from 'src/app/services/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css'],
})
export class TagListComponent {
  tags: ITag[] = [];
  selectedTag?: ITag;

  constructor(private tagService: TagService, private router: Router) {}

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getTags().subscribe((tags) => (this.tags = tags));
  }

  deleteTag(tagId: number): void {
    this.tagService.deleteTag(tagId).subscribe((tags) => (this.tags = tags));
  }

  editTag(tag: ITag): void {
    this.selectedTag = { ...tag };
    this.router.navigate(['/edit-tag', tag.id]);
  }
}
