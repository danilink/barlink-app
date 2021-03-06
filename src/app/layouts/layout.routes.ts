import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent }   from '../home/index';
import { TablePaginationUser }   from '../admin/users/index';
import { ExpensesComponent }   from '../expenses/index';
import { FoodComponent }   from '../food/food.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'income', component: TablePaginationUser },
            { path: 'expenses', component: ExpensesComponent },
            { path: 'food', component: FoodComponent }
          ]

            /*
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]*/
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
