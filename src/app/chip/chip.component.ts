import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ALL_COLORS, CUSTOM_COLORS, MAT_COLORS } from "../confg";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";
import { UntypedFormControl } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  matColors: string[] = MAT_COLORS;
  customColors: string[] = CUSTOM_COLORS;
  allColors: string[] = ALL_COLORS;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new UntypedFormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Apple', 'Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
