import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() label: string = 'Search';
  @Output() search: EventEmitter<void> = new EventEmitter<void>();
  searchText: any;

  onSearch(): void {
    this.search.emit(this.searchText);
  }
}
