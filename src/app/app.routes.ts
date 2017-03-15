import { NgModule }              from '@angular/core';
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
export class AppRoutingModule {}
