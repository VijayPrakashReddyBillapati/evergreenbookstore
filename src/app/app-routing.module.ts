import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './category/business/business.component';
import { HealthComponent } from './category/health/health.component';
import { HistoryComponent } from './category/history/history.component';
import { LifestyleComponent } from './category/lifestyle/lifestyle.component';
import { MarketingComponent } from './category/marketing/marketing.component';
import { ProgrammingComponent } from './category/programming/programming.component';
import { TechnologyComponent } from './category/technology/technology.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

const routes: Routes = [
  {path: 'business' , component: BusinessComponent},
  {path: 'health' , component: HealthComponent},
  {path: 'history' , component: HistoryComponent},
  {path: 'lifestyle' , component: LifestyleComponent},
  {path: 'marketing' , component: MarketingComponent},
  {path: 'programming' , component: ProgrammingComponent},
  {path: 'technology' , component: TechnologyComponent},
  {path: 'signin' , component : SigninComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'cart' , component : CartComponent},
  { path : 'checkout' , component : CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
