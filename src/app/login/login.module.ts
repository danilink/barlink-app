import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
} from '@angular/material';

@NgModule({
    imports: [CommonModule, 
        LoginRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
