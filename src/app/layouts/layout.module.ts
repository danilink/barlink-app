import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { HomeComponent }  from '../home/index';
import { AddressListComponent }  from '../address/index';
import { ExpensesComponent } from '../expenses';
import { DataTableModule } from 'angular-4-data-table';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        DataTableModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent,
        SidebarComponent,
        AddressListComponent,
        ExpensesComponent
    ]
})
export class LayoutModule { }
