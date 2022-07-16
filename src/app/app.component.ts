import { Component, OnInit } from '@angular/core';

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
    {name: 'Hireme', className: 'hireme-theme', source: 'hireme-theme.css'},
    {name: 'Arc light', className: 'arc-light-theme', source: 'arc-theme.css'},
    {name: 'Arc dark', className: 'arc-dark-theme', source: 'arc-theme.css'}
  ];

  theme?: Theme;

  leftMenuOpened: boolean = true;
  rightMenuOpened: boolean = false;

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
    let found = document.head.querySelector('link[rel="stylesheet"][href="' + source + '"]');
    if (!found) {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = source;
        link.onload = () => {
          console.log('XXX LOAD');
          resolve();
        };
        link.onerror = () => reject();
        document.head.appendChild(link);
      });
    }
    else {
      return new Promise((resolve, reject) => {
        console.log('XXX LOAD 2 ');
        resolve()
      });
    }
  }

  selectTheme(theme: Theme) {
    this.loadTheme(theme.source).then(() => {
      this.themes.forEach(t => {
        document.body.classList.remove(t.className);
      });
      document.body.classList.add(theme.className);
      this.theme = theme;
      window.localStorage.setItem('theme', theme.className);
    });
  }

  toggleLeftMenu() {
    this.leftMenuOpened = !this.leftMenuOpened;
  }

  toggleRightMenu() {
    this.rightMenuOpened = !this.rightMenuOpened;
  }

}
