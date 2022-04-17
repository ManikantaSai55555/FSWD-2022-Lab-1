import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MovingCarComponent } from './moving-car/moving-car.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'MovingCar', component:MovingCarComponent },
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
