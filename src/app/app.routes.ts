import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './layouts/not-found.component';
import { LoginComponent } from './login';

const routes: Routes = [
    { path: '', loadChildren: './layouts/layout.module#LayoutModule'},
    { path: 'login', component: LoginComponent },
    /* { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
