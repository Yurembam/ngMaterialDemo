import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-manager-root',
    template: `<app-sidebar></app-sidebar>`,
    styles: []
})

export class ContactManagerAppComponent implements OnInit {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconSet(
          sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
       }

    ngOnInit() { }
}