import { Component, OnInit } from '@angular/core';
import { ALL_COLORS, CUSTOM_COLORS, MAT_COLORS } from "../confg";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  matColors: string[] = MAT_COLORS;
  customColors: string[] = CUSTOM_COLORS;
  allColors: string[] = ALL_COLORS;

  constructor() { }

  ngOnInit(): void {
  }

}
