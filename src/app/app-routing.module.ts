import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { EditProductFormComponent } from './components/product/edit-product-form/edit-product-form.component';
import { AddProductFormComponent } from './components/product/add-product-form/add-product-form.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { EditTagFormComponent } from './components/tag/edit-tag-form/edit-tag-form.component';
import { AddTagFormComponent } from './components/tag/add-tag-form/add-tag-form.component';

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
