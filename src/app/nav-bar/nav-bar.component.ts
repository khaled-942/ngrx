import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLanguage } from '../store/Language/language.action';
// import { LanguageAction } from '../store/Language/language.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  lang: any;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('language').subscribe((lang) => {
      this.lang = lang.currentLang;
    });
  }

  changelang() {
    console.log('fire from compounent')
    // this.store.dispatch(new LanguageAction(this.lang === 'en' ? 'ar' : 'en'));
    this.store.dispatch(setLanguage({lang:this.lang === 'en' ? 'ar' : 'en'}));
  }
}
