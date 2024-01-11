import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css'],
})
export class BtnAddComponent {
  @Input() label = 'Save';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
