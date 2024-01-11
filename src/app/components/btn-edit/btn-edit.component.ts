import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css'],
})
export class BtnEditComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
