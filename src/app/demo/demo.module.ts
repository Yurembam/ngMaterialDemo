import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { DemoRoutingModule } from './demo-routing.module';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule,
        DemoRoutingModule
    ],
    exports: [],
    declarations: [ButtonsComponent, FlexboxComponent],
    providers: [],
})
export class DemoModule { }
