import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'PublicComponent', pathMatch: 'full',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent]
})
export class PublicRoutingModule { }
