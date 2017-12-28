import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { HomeComponent }  from '../home/index';
import { TablePaginationUser }  from '../admin/users/index';
import { ExpensesComponent } from '../expenses';
import { MatTableModule,MatMenuModule, MatIconModule, MatButtonModule, MatSidenavModule,
         MatToolbarModule, MatSelectModule, MatCardModule, MatTabsModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
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
