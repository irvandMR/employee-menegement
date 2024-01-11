import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'btn-view',
  templateUrl: './btn-view.component.html',
  styleUrls: ['./btn-view.component.css'],
})
export class BtnViewComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
