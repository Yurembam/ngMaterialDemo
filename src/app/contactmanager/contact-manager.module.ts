import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../shared/material.module';
import { UserService } from './services/user.service';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

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
    declarations: [
        ContactManagerAppComponent,
        SidebarComponent,
        ToolbarComponent,
        MainContentComponent,
        NotesComponent,
        NewContactDialogComponent
    ],

    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],

    exports: [],

    providers: [
        UserService
    ],
    
    entryComponents: [NewContactDialogComponent]
})
export class ContactManagerModule { }
