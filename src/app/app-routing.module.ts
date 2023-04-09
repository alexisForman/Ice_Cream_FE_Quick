import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PricingComponent } from './pricing/pricing.component';
import { RentalAgreementComponent } from './rental-agreement/rental-agreement.component';
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "pricing", component: PricingComponent },
  { path: "menu", component: MenuComponent },
  { path: "rental_agreement", component: RentalAgreementComponent },
  { path: "navbar", component: NavbarComponent},
  {path: "home", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
