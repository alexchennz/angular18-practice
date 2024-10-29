import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() alertType: string = 'Success';
  @Input() alertMessage: string = 'This alert box could indicate a neutral informative change or action.';
}
