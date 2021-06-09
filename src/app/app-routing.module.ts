import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from './Components/about/about.component';
//import { ContactComponent } from './Components/contact/contact.component';
import { FruitsComponent } from './Components/fruits/fruits.component';
import { HomeComponent } from './Components/home/home.component';

import { SigninComponent } from './Components/signin/signin.component';
import { VegetableComponent } from './Components/vegetable/vegetable.component';
import { AuthguardService } from './Service/authguard.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'signin',
  loadChildren : () => import('./Components/signin/signin.module').then(m=> m.SigninModule)},
  {path:'veg',
  loadChildren : () => import('./Components/vegetable/vegetable.module').then(m=> m.VegetableModule)},
  {path:'fruit',
   loadChildren : () => import('./Components/fruits/fruits.module').then(m=> m.FruitsModule)},
  {path:'about',
  loadChildren : () => import('./Components/about/about.module').then(m=> m.AboutModule)
  },
  {path:'contact',
  loadChildren : () => import('./Components/contact/contact.module').then(m=> m.ContactModule)
  },
  {path:'product1/:id',
  loadChildren : () => import('./Components/fruits/products/products.module').then(m=> m.ProductsModule)
  },
  {path:'product2/:id',
  loadChildren : () => import('./Components/vegetable/veg-products/veg-products.module').then(m=> m.VegProductsModule)
  },
  {path:'cart',
  loadChildren : () => import('./Components/cart/cart.module').then(m=> m.CartModule),canActivate:[AuthguardService]
  },
  {path:'order',
  loadChildren : () => import('./Components/orders/orders.module').then(m=> m.OrdersModule),canActivate:[AuthguardService]
  },
  {path:'profile',
  loadChildren : () => import('./Components/profile/profile.module').then(m=> m.ProfileModule),canActivate:[AuthguardService]
  },
  {path:'orderdetails/:id',
  loadChildren : () => import('./Components/orders/details/details.module').then(m=> m.DetailsModule),canActivate:[AuthguardService]
  },
  {path:'card',
  loadChildren : () => import('./Components/cardpage/cardpage.module').then(m=> m.CardpageModule),canActivate:[AuthguardService]
  },
  {path:'ordersummary',
  loadChildren : () => import('./Components/ordersummary/ordersummary.module').then(m=> m.OrdersummaryModule),canActivate:[AuthguardService]
  },
  {path:'success',
  loadChildren : () => import('./Components/paymentsuccessful/paymentsuccessful.module').then(m=> m.PaymentsuccessfulModule),canActivate:[AuthguardService]
  },
  {path:'privacy',
  loadChildren : () => import('./Components/privacy/privacy.module').then(m=> m.PrivacyModule)
  },
  {path:'terms',
  loadChildren : () => import('./Components/terms/terms.module').then(m=> m.TermsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
