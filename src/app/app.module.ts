import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
} from 'angularx-social-login';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
//import { OrdersComponent } from './Components/orders/orders.component';
//import { CartComponent } from './Components/cart/cart.component';

//import { SigninComponent } from './Components/signin/signin.component';
//import {MatCardModule} from '@angular/material/card';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatTabsModule} from '@angular/material/tabs';
//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatInputModule} from '@angular/material/input';
//import { VegetableComponent } from './Components/vegetable/vegetable.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { FruitsComponent } from './Components/fruits/fruits.component';
//import { AboutComponent } from './Components/about/about.component';
//import { ContactComponent } from './Components/contact/contact.component';

import {JwtModule} from '@auth0/angular-jwt';
import { HomeproductsComponent } from './Components/home/homeproducts/homeproducts.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

//import { MatCardModule } from '@angular/material/card';
//import { TermsComponent } from './Components/terms/terms.component';
//import { PrivacyComponent } from './Components/privacy/privacy.component';
//import { PrivacyComponent } from './Components/privacy/privacy.component';
//import { PaymentsuccessfulComponent } from './Components/paymentsuccessful/paymentsuccessful.component';
//import { OrdersummaryComponent } from './Components/ordersummary/ordersummary.component';
//import { CardpageComponent } from './Components/cardpage/cardpage.component';
//import { ProfileComponent } from './Components/profile/profile.component';
export function tokenGetter(){
  return localStorage.getItem("token");
}
export function tokenGetter2(){
  return localStorage.getItem("price");
}
export function tokenGetter3(){
  return localStorage.getItem("name");
}



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HomeproductsComponent
    //TermsComponent
    //PrivacyComponent
    //PrivacyComponent
    //PaymentsuccessfulComponent
    //OrdersummaryComponent
    //CardpageComponent
    //ProfileComponent
    //OrdersComponent
    //CartComponent,
    //SigninComponent,
    //VegetableComponent
    //FruitsComponent
    //AboutComponent
    //ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter
      }
    }),
    IvyCarouselModule,
    SocialLoginModule
    
    //MatCardModule,
    //MatFormFieldModule,
    //MatTabsModule,
    //MatCheckboxModule,
    //MatInputModule,
    //FormsModule,
    //ReactiveFormsModule,
    //FlexLayoutModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
