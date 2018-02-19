import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './layouts/not-found.component';
import { LoginComponent } from './login';
import { AuthGuard } from './login/auth-guard';

const routes: Routes = [
    { path: '', loadChildren: './layouts/layout.module#LayoutModule', canActivate: [AuthGuard]},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    /* { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', component: PageNotFoundComponent }*/
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
