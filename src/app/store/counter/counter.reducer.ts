import {
  CounterActions,
  ADD_COUNTER,
  RESET_COUNTER,
  SUB_COUNTER,
} from './counter.action';

// import { createReducer, on } from '@ngrx/store';
// import { counter } from './counter.action';
// const initialVal = {
//   start: 0,
// };
export function counterReducer(state: number = 0, action: CounterActions) {
  switch (action.type) {
    case ADD_COUNTER:
      let add = action.payload + 1;
      console.log('add',add)
      return add;

    case RESET_COUNTER:
      let reset = 0;
      console.log('reset',reset)
      return reset;

    case SUB_COUNTER:
      let sub = action.payload - 1;
      console.log('sub',sub)
      return sub;

    default:
      return state;
  }
}

// export const counterReducer = createReducer(
//   initialVal,
//   on(counter, (state, { counter }) => ({ ...state, start: counter }))
// );
