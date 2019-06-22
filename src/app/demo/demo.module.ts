import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { DemoRoutingModule } from './demo-routing.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule,
        DemoRoutingModule
    ],
    exports: [],
    declarations: [ButtonsComponent],
    providers: [],
})
export class DemoModule { }
