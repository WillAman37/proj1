import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ModlComponent } from './modl/modl.component';
import { TeamsComponent } from './teams/teams.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path: 'about', component: AboutComponent},
{path: 'modl', component: ModlComponent},
{path: 'teams', component: TeamsComponent},
{path: 'product', component: ProductComponent},
{ path: '', component: HomeComponent }
//{path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ModlComponent,  AboutComponent, TeamsComponent, ProductComponent, HomeComponent ]