import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'btn-cancel',
  templateUrl: './btn-cancel.component.html',
  styleUrls: ['./btn-cancel.component.css'],
})
export class BtnCancelComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
