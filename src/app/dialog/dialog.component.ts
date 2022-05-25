import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogExampleComponent } from "./dialog-example/dialog-example.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this._dialog.open(DialogExampleComponent, {
      width: '50vw',
      maxWidth: '480px'
    });
  }

}
