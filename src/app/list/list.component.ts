import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items = [
    {name: 'Pepper', disabled: false},
    {name: 'Salt', disabled: false},
    {name: 'Paprika', disabled: false},
    {name: 'Tomato', disabled: true}
  ];

  actions = [
    {name: 'Open', icon: 'upload_file', disabled: false},
    {name: 'Save', icon: 'save', disabled: false},
    {name: 'Undo', icon: 'undo', disabled: false},
    {name: 'Delete', icon: 'delete', disabled: true},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
