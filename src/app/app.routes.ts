/*import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }   from './components/home/index';
import { AddressListComponent, AddressDetailComponent }     from './components/address/index';
import { PageNotFoundComponent } from './components/layouts/not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: AddressDetailComponent },
  { path: 'address', component: AddressListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/layouts/not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './components/layouts/layout.module#LayoutModule'
    },
  /*  { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
