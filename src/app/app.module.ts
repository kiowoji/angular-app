import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductFormComponent } from './product/edit-product-form/edit-product-form.component';
import { AddProductFormComponent } from './product/add-product-form/add-product-form.component';
import { TagListComponent } from './tag/tag-list/tag-list.component';
import { AddTagFormComponent } from './tag/add-tag-form/add-tag-form.component';
import { EditTagFormComponent } from './tag/edit-tag-form/edit-tag-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    EditProductFormComponent,
    AddProductFormComponent,
    TagListComponent,
    AddTagFormComponent,
    EditTagFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
