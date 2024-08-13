import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from './login/view/view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly testValue = '$1 190,90'
}
