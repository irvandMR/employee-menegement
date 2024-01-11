import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.css'],
})
export class BtnDeleteComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
