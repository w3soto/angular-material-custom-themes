import { Component, NgZone, OnInit } from '@angular/core';

export interface Theme {
  name: string;
  className: string;
  source: string; // bundle name + extension
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  themes: Theme[] = [
    {name: 'Arc light', className: 'arc-light-theme', source: 'arc-theme.css'},
    {name: 'Arc dark', className: 'arc-dark-theme', source: 'arc-theme.css'},
    {name: 'Hireme', className: 'hireme-theme', source: 'hireme-theme.css'},
    {name: 'Deep Purple & Amber (built in)', className: 'deeppurple-amber', source: './assets/prebuilt-themes/deeppurple-amber.css'},
    {name: 'Indigo & Pink (built in)', className: 'indigo-pink', source: './assets/prebuilt-themes/indigo-pink.css'},
    {name: 'Pink & Blue-grey (built-in)', className: 'pink-bluegrey', source: './assets/prebuilt-themes/pink-bluegrey.css'},
    {name: 'Purple & Green (built-in)', className: 'purple-green', source: './assets/prebuilt-themes/purple-green.css'},
  ];

  theme?: Theme;

  leftMenuOpened: boolean = true;
  rightMenuOpened: boolean = false;

  constructor(
    private _ngZone: NgZone
  ) {

  }

  ngOnInit() {
    let theme = null;
    let className = window.localStorage.getItem('theme');
    if (className) {
      theme = this.themes.find(t => t.className == className);
    }
    if (!theme) {
      theme = this.themes[0];
    }
    this.selectTheme(theme);
  }

  loadTheme(source: string): Promise<void> {
    let link: HTMLLinkElement = document.getElementById('theme') as HTMLLinkElement;
    link?.remove();
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = "theme";
      link.href = source;
      link.onload = () => {
        resolve();
      };
      link.onerror = () => {
        reject();
      };
      document.head.appendChild(link);
    });

  }

  selectTheme(theme: Theme) {

    const transition = 200;

    document.body.style.transition = "opacity " + transition + "ms";
    document.body.style.opacity = "0";

      setTimeout(() => {

      this.loadTheme(theme.source).then(() => {
        this.themes.forEach(t => {
          document.body.classList.remove(t.className);
        });
        document.body.classList.add(theme.className);
        this.theme = theme;
        window.localStorage.setItem('theme', theme.className);

        setTimeout(() => {
          document.body.style.opacity = "1";
        }, 1);

      }).catch(() => {

        setTimeout(() => {
          document.body.style.opacity = "1";
        }, 1);

      });

    }, transition + 1);
  }

  toggleLeftMenu() {
    this.leftMenuOpened = !this.leftMenuOpened;
  }

  toggleRightMenu() {
    this.rightMenuOpened = !this.rightMenuOpened;
  }

}
