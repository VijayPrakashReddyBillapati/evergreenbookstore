import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './category/business/business.component';
import { HealthComponent } from './category/health/health.component';
import { MarketingComponent } from './category/marketing/marketing.component';
import { ProgrammingComponent } from './category/programming/programming.component';
import { TechnologyComponent } from './category/technology/technology.component';
import { LifestyleComponent } from './category/lifestyle/lifestyle.component';
import { HistoryComponent } from './category/history/history.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    HealthComponent,
    MarketingComponent,
    ProgrammingComponent,
    TechnologyComponent,
    LifestyleComponent,
    HistoryComponent,
    SigninComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
