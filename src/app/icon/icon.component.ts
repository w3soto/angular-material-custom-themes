import { Component, OnInit } from '@angular/core';
import { ALL_COLORS, CUSTOM_COLORS, MAT_COLORS } from "../confg";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  matColors: string[] = MAT_COLORS;
  customColors: string[] = CUSTOM_COLORS;
  allColors: string[] = ALL_COLORS;

  constructor() { }

  ngOnInit(): void {
  }

}
