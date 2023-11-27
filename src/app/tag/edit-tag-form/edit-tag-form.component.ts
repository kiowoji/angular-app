import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/tag.service';
import { ITag } from '../tag.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tag-form',
  templateUrl: './edit-tag-form.component.html',
  styleUrls: ['./edit-tag-form.component.css'],
})
export class EditTagFormComponent {
  @Input() selectedTag?: ITag;
  tagForm: FormGroup;

  constructor(
    private tagService: TagService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tagForm = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const tagId = +this.route.snapshot.paramMap.get('id')!;
    if (tagId) {
      this.tagService.getTags().subscribe((tags) => {
        this.selectedTag = tags.find((t) => t.id === tagId);
        if (this.selectedTag) {
          this.tagForm.patchValue({
            name: this.selectedTag.name,
            color: this.selectedTag.color,
          });
        } else {
          console.error('Tag not found.');
        }
      });
    } else {
      console.error('Tag ID is not provided in the route.');
    }
  }

  onSubmit(): void {
    if (this.tagForm.valid && this.selectedTag) {
      const updatedTag = { ...this.selectedTag, ...this.tagForm.value };
      this.tagService.editTag(this.selectedTag.id, updatedTag).subscribe(
        () => {
          console.log('Edit Tag successful');
          this.tagForm.reset();
          this.router.navigate(['/tag-list']);
        },
        (error) => console.error('Edit Tag failed:', error)
      );
    }
  }
}
