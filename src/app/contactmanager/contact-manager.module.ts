import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../shared/material.module';
import { UserService } from './services/user.service';
import { ContactManagerAppComponent } from './contact-manager-app.component';

const routes: Routes = [
    {
        path: '', component: ContactManagerAppComponent,
        children: [
            { path: ':id', component: MainContentComponent },
            { path: '', component: MainContentComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        ContactManagerAppComponent,
        SidebarComponent,
        ToolbarComponent,
        MainContentComponent
    ],
    providers: [
        UserService
    ]
})
export class ContactManagerModule { }
