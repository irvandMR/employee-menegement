import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-save',
  templateUrl: './btn-save.component.html',
  styleUrls: ['./btn-save.component.css'],
})
export class BtnSaveComponent {
  @Input() model = 'button';
  @Input() label = 'Save';
  @Input() typeBtn = 'text';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
