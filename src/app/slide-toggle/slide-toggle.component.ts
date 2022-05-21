import { Component, OnInit } from '@angular/core';
import { ALL_COLORS, CUSTOM_COLORS, MAT_COLORS } from "../confg";

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  matColors: string[] = MAT_COLORS;
  customColors: string[] = CUSTOM_COLORS;
  allColors: string[] = ALL_COLORS;

  constructor() { }

  ngOnInit(): void {
  }

}
