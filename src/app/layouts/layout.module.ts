import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent} from '../shared';
import { HomeComponent}  from '../home/index';
import { AddressListComponent}  from '../address/index';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent,
        SidebarComponent,
        AddressListComponent
    ]
})
export class LayoutModule { }
