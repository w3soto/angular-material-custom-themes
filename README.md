# Angular Material Custom Theme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Background colors

```scss
$mat-theme-background: (
  // .mat-app-background
  // .checkbox-mark-color (stroke)
  // .mat-drawer-container
  background:               transparentize($dark-bg, .8),
  // .mat-toolbar
  app-bar:                  transparentize($dark-bg, .04),
  // .mat-option
  // .mat-list-option
  // .mat-list-item
  // .mat-step-header
  // .mat-expansion-panel
  hover:                    $light-bg-alpha-4,
  // .mat-card
  // .mat-autocomplete-panel
  // .mat-option
  // .mat-button-toggle-appearance-standard 
  // + added to .mat-button-toggle-appearance-legacy
  // .mat-menu-panel
  // .mat-select-panel
  // .mat-drawer-backdrop (+opacity .6)
  // .mat-stepper-horizontal
  // .mat-table
  // .mat-tree
  card:                     transparentize($dark-bg, .12),
  // .mat-bottom-sheet-container
  // .mat-drawer-push
  dialog:                   transparentize($dark-bg, .12),
  // .mat-tooltip
  tooltip:                  $dark-bg-lighter-20,
  // .mat-badge-disabled
  // .mat-button-disabled
  // .mat-expansion-panel-header (disabled)
  disabled-button:          $dark-bg-lighter-5,
  // .mat-flat-button
  // .mat-raised-button
  // .mat-fab
  // .mat-mini-fab
  raised-button:            $dark-bg-lighter-5,
  // .mat-button-toggle-focus-overlay
  focused-button:           $light-focused,
  // .mat-button-toggle-checked
  selected-button:          $dark-bg-lighter-10,
  // .mat-button-toggle-disabled.mat-button-toggle-checked
  selected-disabled-button: $dark-bg-lighter-30,
  // .mat-button-toggle-disabled
  disabled-button-toggle:   transparent, //$dark-bg-lighter-10,
  // mat-chip.mat-standard-chip
  unselected-chip:          $dark-bg-lighter-10,
  // .mat-list-item-disabled
  disabled-list-option:     $dark-bg-lighter-10,
);
```

## Text (foreground) colors
```scss

```

## Built-in color palettes
```scss

```

## Custom color palettes
```scss

```

## Theme
```scss

```

## Configure

Update *angular.json*
```javascript
"styles": [
  {
    "input": "src/themes/THEME-NAME/THEME-NAME-light.theme.scss",
    "bundleName": "THEME-NAME-light-theme",
    "inject": true // loaded by default
  },
  {
    "input": "src/themes/THEME-NAME/THEME-NAME-dark.theme.scss",
    "bundleName": "THEME-NAME-dark-theme",
    "inject": false
  },
  // other themes
]
```
