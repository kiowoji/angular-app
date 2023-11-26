import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-tag-form',
  templateUrl: './add-tag-form.component.html',
  styleUrls: ['./add-tag-form.component.css'],
})
export class AddTagFormComponent {
  tagForm: FormGroup;

  constructor(private tagService: TagService, private fb: FormBuilder) {
    this.tagForm = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.tagForm.valid) {
      const newTag = this.tagForm.value;
      this.tagService.addTag(newTag).subscribe();
      this.tagForm.reset();
    }
  }
}
