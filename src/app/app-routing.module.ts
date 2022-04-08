import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'sign-in',
    component: SigninComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'cart',
    component: CartComponent ,
  },
  // {
  //   path: 'admin/items',
  //   component: DisplayItemsComponent,
  //   canActivate: [AdminAuthGuard]
  // },
  // {
  //   path: 'admin/items/add',
  //   component: AddOrEditItemsComponent,
  //   data: { path: 'add' },
  //   canActivate: [AdminAuthGuard]
  // },
  // {
  //   path: 'admin/items/edit/:itemCategory/:itemId',
  //   component: AddOrEditItemsComponent,
  //   data: { path: 'edit' },
  //   canActivate: [AdminAuthGuard]
  // },
  // {
  //   path: 'admin/manage-orders',
  //   component: ManageOrdersComponent,
  //   canActivate: [AdminAuthGuard]
  // },
  // {
  //   path: 'admin/:uid/orders',
  //   component: DisplayOrdersComponent,
  //   canActivate: [AdminAuthGuard]
  // },
  // {
  //   path: 'menu-page',
  //   component: CategoryPageComponent
  // },
  // {
  //   path: 'cart',
  //   component: CartPageComponent
  // },
  // {
  //   path: 'orders',
  //   component: OrderPageComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'confirm-order',
  //   component: ConfirmOrderComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: 'not-found',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
