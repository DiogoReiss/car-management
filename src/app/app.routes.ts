import { Routes } from '@angular/router';
import { ViewComponent } from './login/view/view.component';

export const routes: Routes = [
  {
    path: '*',
    component: ViewComponent
  }
];
