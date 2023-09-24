import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { ViewBooksComponent } from './book/view-books/view-books.component';
import { CheckinBookComponent } from './book/checkin-book/checkin-book.component';
import { CheckoutBookComponent } from './book/checkout-book/checkout-book.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'checkin-book', component: CheckinBookComponent },
  { path: 'checkout-book', component: CheckoutBookComponent },
  { path: 'view-books', component: ViewBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewBooksComponent,AddUserComponent,LoginUserComponent, CheckinBookComponent, CheckoutBookComponent]
