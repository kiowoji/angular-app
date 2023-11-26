import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITag } from '../tag/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor() {}

  private tags: ITag[] = [
    { id: 1, name: 'Tag1', color: '#FF5733' },
    { id: 2, name: 'Tag2', color: '#33FF57' },
  ];

  getTags(): Observable<ITag[]> {
    return of(this.tags);
  }

  addTag(tag: ITag): Observable<ITag[]> {
    this.tags.push(tag);
    return of(this.tags);
  }

  editTag(tagId: number, updatedTag: ITag): Observable<ITag[]> {
    const index = this.tags.findIndex((tag) => tag.id === tagId);
    if (index !== -1) {
      this.tags[index] = updatedTag;
    }
    return of(this.tags);
  }

  deleteTag(tagId: number): Observable<ITag[]> {
    this.tags = this.tags.filter((tag) => tag.id !== tagId);
    return of(this.tags);
  }
}
