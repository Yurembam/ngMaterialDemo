import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
    { path: '', component: SidebarComponent }
];

@NgModule({
    imports: [
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        SidebarComponent,
        ToolbarComponent,
        MainContentComponent],
    providers: [],
})
export class ContactManagerModule { }
