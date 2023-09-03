import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-by-store';
  lang: any;
  constructor(private store: Store<any>) {}
  ngOnInit() {
    this.store.select('language').subscribe((lang) => {
      this.lang = lang.currentLang;
    });
  }
}
