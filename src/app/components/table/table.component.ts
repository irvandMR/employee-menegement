import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() list: any[] = [];
  @Input() columns: any[] = [];
  @Output() action: EventEmitter<void> = new EventEmitter<void>();
  @Input() selectedGroup: any;
  @Input() searchTerm: string = '';
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private srv: TableService) {}

  get listData() {
    return [...this.list].reverse();
  }

  ngOnInit() {
    const storedFilteredData = this.srv.getItem('filteredData');
    if (storedFilteredData) {
      this.list = storedFilteredData;
    } else {
      this.list = this.listData.reverse();
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get pagedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }

  get filteredData() {
    const filterData = this.listData.filter((data) => {
      const matchesGroup =
        !this.selectedGroup || data.group === this.selectedGroup?.name;

      const matchesSearchTerm = this.searchTerm
        ? Object.values(data).some(
            (value) =>
              value &&
              value
                .toString()
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())
          )
        : true;
      return matchesGroup && matchesSearchTerm;
    });

    return filterData;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onAction(e: any, key: string): any {
    const data: any = {
      act: key,
      data: e,
    };
    this.action.emit(data);
  }
}
