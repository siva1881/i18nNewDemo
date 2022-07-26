import { Component, Inject, LOCALE_ID } from '@angular/core';
interface Locale {
  localeCode: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  locales: Locale[] = [
    { localeCode: 'en-US', label: 'English' },
    { localeCode: 'fr', label: 'Français' },
  ];

  title = 'testi18n';
  name: string = 'John';
  count: number = 5;
  gender: string = 'male';
  amount: number = 7.5;
  currentDate: number = Date.now();

  company: string = 'Localizely';
  footerMessage: string = $localize`:Component argument message example@@message.component-argument:Made with ❤️ by ${this.company}`;
constructor(@Inject(LOCALE_ID) public locale: string){}
}
