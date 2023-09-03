import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { counter } from '../store/counter/counter.action';
import { AddAction, ResetAction,SUBAction } from '../store/counter/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counter: any;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter)=>{this.counter = counter});
  }

  increment(){
    this.store.dispatch(new AddAction(this.counter))
  }
  decrement(){
    this.store.dispatch(new SUBAction(this.counter))
  }
  reset(){
    this.store.dispatch(new ResetAction(this.counter))
  }
}
