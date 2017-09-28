import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { HomeComponent }  from '../home/index';
import { TablePaginationUser }  from '../admin/users/index';
import { ExpensesComponent } from '../expenses';
import { DataTableModule } from 'angular-4-data-table';
import { MdTableModule,MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        DataTableModule,
        MdIconModule,
        MdButtonModule,
        MdTableModule,
        MdMenuModule,
        CdkTableModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent,
        SidebarComponent,
        TablePaginationUser,
        ExpensesComponent
    ]
})
export class LayoutModule { }
