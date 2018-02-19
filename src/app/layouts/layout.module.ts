import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { HomeComponent }  from '../home/index';
import { TablePaginationUser }  from '../admin/users/index';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ExpensesComponent, ExpenseDetailDialog } from '../expenses';
import { MatTableModule,MatMenuModule, MatIconModule, MatButtonModule, MatSidenavModule,
         MatToolbarModule, MatSelectModule, MatCardModule, MatTabsModule, MatInputModule,
         MatListModule, MatDatepickerModule, MatDialogModule,} from '@angular/material';
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
        CdkTableModule,
        MatInputModule,
        MatListModule,
        FormsModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatDialogModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent,
        SidebarComponent,
        TablePaginationUser,
        ExpensesComponent,
        ExpenseDetailDialog
    ],
    entryComponents: [ExpenseDetailDialog]
})
export class LayoutModule { }
