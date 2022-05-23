# Angular Material Custom Theme

Custom Angular Material themes (dark & light)

* Arc light/dark
* Transparent light/dark

## Features
* More colors (secondary, info, success, caution)
* Dense variants

## TODO
* Add compact variants

## Typography
```scss
$theme-typography: (
)
```

## Background colors

```scss
$theme-background: (
  // .mat-app-background
  // .checkbox-mark-color (stroke)
  // .mat-drawer-container
  background:               transparentize($dark-bg, .8),
  // .mat-toolbar
  app-bar:                  transparentize($dark-bg, .04),
  // .mat-option
  // .mat-list-option
  // .mat-list-item
  // .mat-menu-item
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

$dark-theme-foreground-palette: (
  // .mat-button-focus-overlay
  // .mat-ripple-element
  // .mat-slider-tick-color
  base: $light-primary-text,
  // .mat-stroked-button (border)
  // .mat-button-toggle-group-appearance-standard (border)
  // .mat-calendar-table-header-divider
  // .mat-form-field-underline
  // .mat-form-field-outline
  // .mat-drawer (border)
  // .mat-stepper (lines)
  // .mat-table (borders)
  divider: $light-dividers,
  dividers: $light-dividers,
  // disabled elements color
  disabled: $light-disabled-text,
  disabled-button: $light-disabled-text,
  disabled-text: $light-disabled-text,
  // elevation color
  elevation: black,
  // .mat-button-toggle
  // .mat-optgroup-disabled .mat-optgroup-label
  // .mat-option-disabled
  // .mat-calendar-table-header
  // .mat-calendar-body-today
  hint-text: $light-secondary-text,
  // .mat-button-toggle-checked
  // .mat-card-subtitle
  // .mat-checkbox-frame
  // .mat-checkbox-label
  // .mat-optgroup-label
  // .mat-calendar-body-label
  // .mat-expansion-panel-header-description
  // .mat-form-field-label
  // .mat-list-base .mat-subheader
  // .mat-paginator
  // .mat-radio-outer-circle
  // .mat-select-arrow
  // .mat-sort-header-arrow
  // .mat-step-label
  // .mat-step-icon
  // .mat-header-cell
  secondary-text: $light-secondary-text,
  accent-text: $light-secondary-text,
  // .mat-calendar-arrow
  // .mat-datepicker-toggle
  // .mat-datepicker-content .mat-calendar-next-button
  // .mat-datepicker-content .mat-calendar-previous-button
  icon: $light-secondary-text,
  icons: $light-secondary-text,
  // default text color
  text: $light-primary-text,
  // slider color
  slider-min: $light-secondary-text,
  slider-off: rgba($light-secondary-text, 0.3),
  slider-off-active: rgba($light-secondary-text, 0.3),
);
```

## Built-in color palettes
```scss
$theme-primary: ();

$theme-accent: ();

$theme-warn: ();

```

## Custom color palettes
```scss
$theme-custom-color-1: ();
...
$theme-custom-color-N: ();

```

## Theme
```scss
$theme: (
  color: (
    is-dark: true/false,
    primary: $theme-primary,
    accent: $theme-accent,
    warn: $theme-warn,
    foreground: $theme-foreground,
    background: $theme-background,
  ),
  density: null,
  typography: $theme-typography,
  // custom config
  custom: (
    color: (
      color1: $theme-custom-color-1,
      ...
      colorN: $theme-custom-color-N,
    )
  )
);

@include mat.core($theme-typography);

.THEME-NAME-dark/light-theme {
  @include mat.all-component-themes($theme);
  @include customTheme.theme($theme);
}

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
