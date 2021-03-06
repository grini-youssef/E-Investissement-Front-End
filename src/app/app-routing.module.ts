import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { InvestirComponent } from './components/investir/investir.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjetsExistentComponent } from './components/projets-existent/projets-existent.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import {CreateProjetComponent} from "./post/create-projet/create-projet.component";

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'investir', component: InvestirComponent },
  {path:'search/:keyword',component:ProjetsExistentComponent},
  { path: 'projets', component: ProjetsExistentComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-projet', component:CreateProjetComponent, canActivate: [AuthGuard]},
  { path: 'view-post/:id', component: ViewPostComponent, canActivate: [AuthGuard]  },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
