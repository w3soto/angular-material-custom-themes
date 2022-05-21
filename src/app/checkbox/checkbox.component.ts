import { Component, OnInit } from '@angular/core';
import { ALL_COLORS, CUSTOM_COLORS, MAT_COLORS } from "../confg";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  matColors: string[] = MAT_COLORS;
  customColors: string[] = CUSTOM_COLORS;
  allColors: string[] = ALL_COLORS;

  constructor() { }

  ngOnInit(): void {
  }

}
