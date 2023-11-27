import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { EditProductFormComponent } from './product/edit-product-form/edit-product-form.component';
import { AddProductFormComponent } from './product/add-product-form/add-product-form.component';
import { TagListComponent } from './tag/tag-list/tag-list.component';
import { EditTagFormComponent } from './tag/edit-tag-form/edit-tag-form.component';
import { AddTagFormComponent } from './tag/add-tag-form/add-tag-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'edit-product/:id', component: EditProductFormComponent },
  { path: 'new-product', component: AddProductFormComponent },
  { path: 'tag-list', component: TagListComponent },
  { path: 'edit-tag/:id', component: EditTagFormComponent },
  { path: 'new-tag', component: AddTagFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
