import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [CommonModule,
              LoginRoutingModule,
            MatFormFieldModule,
            MatIconModule,
            MatButtonModule,
          MatInputModule ],
    declarations: [LoginComponent]
})
export class LoginModule {}
