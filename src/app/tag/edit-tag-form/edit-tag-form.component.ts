import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { ITag } from '../tag.model';

@Component({
  selector: 'app-edit-tag-form',
  templateUrl: './edit-tag-form.component.html',
  styleUrls: ['./edit-tag-form.component.css'],
})
export class EditTagFormComponent {
  @Input() selectedTag?: ITag;
  tagForm: FormGroup;

  constructor(private tagService: TagService, private fb: FormBuilder) {
    this.tagForm = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.selectedTag) {
      this.tagForm.patchValue({
        name: this.selectedTag.name,
        color: this.selectedTag.color,
      });
    }
  }

  onSubmit(): void {
    if (this.tagForm.valid && this.selectedTag) {
      const updatedTag = { ...this.selectedTag, ...this.tagForm.value };
      this.tagService.editTag(this.selectedTag.id, updatedTag).subscribe();
      this.tagForm.reset();
    }
  }
}
