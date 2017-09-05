import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { HeaderComponent} from './headers';
import { HomeComponent}  from '../../components/home/index';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        HomeComponent
    ]
})
export class LayoutModule { }
