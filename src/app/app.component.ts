import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngMaterialDemo';
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}
