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
import { MatTableModule,MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        DataTableModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatMenuModule,
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
