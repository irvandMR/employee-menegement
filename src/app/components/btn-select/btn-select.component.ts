import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-select',
  templateUrl: './btn-select.component.html',
  styleUrls: ['./btn-select.component.css'],
})
export class BtnSelectComponent {
  @Input() value: any = [];
//   @Input() isSearch: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  
  selected: string = '';

  click(e: any) {
    this.selected = e.name;
    this.onClick.emit(e);
  }
}
