import { Component, Injectable, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class NoTooltipsPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = '';
  itemsPerPageLabel = '';
  lastPageLabel = '';
  nextPageLabel = '';
  previousPageLabel = '';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return 'Page 1 of 1';
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}



@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: NoTooltipsPaginatorIntl}],
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
