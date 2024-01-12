import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'btn-select',
  templateUrl: './btn-select.component.html',
  styleUrls: ['./btn-select.component.css'],
})
export class BtnSelectComponent implements OnInit {
  @Input() value: any[] = [];
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  precisionValue!: string;
  selectedName: string = '';
  filteredValue: any[] = [];

  ngOnInit() {
    this.filteredValue = this.value;
  }

  click(e: any) {
    this.selectedName = e.name;
    this.onClick.emit(e);
  }
  filterValue() {
    if (!this.precisionValue) {
      this.filteredValue = this.value;
      return;
    }

    this.filteredValue = this.value.filter((item) =>
      item.name.toLowerCase().includes(this.precisionValue.toLowerCase())
    );
  }
}
