import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'prefix'},
  {path: 'home', redirectTo: ''},
  {path: "projects", component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'oh-no', component: NotfoundComponent},
  {path: '**', redirectTo: '/oh-no'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
