import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = 'Click Me';
  @Input() btnClass: string = 'btn btn-primary';

  @Output() onBtnClicked: any = new EventEmitter<any>();
  
  onClick(){
    // debugger;
    this.onBtnClicked.emit('admin');
  }
}
