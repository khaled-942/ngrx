import { Action } from '@ngrx/store';

export const ADD_COUNTER = 'ADD_COUNTER';
export class AddAction implements Action {
  readonly type: string = ADD_COUNTER;
  constructor(public payload: number) {}
}

export const RESET_COUNTER = 'RESET_COUNTER';
export class ResetAction implements Action {
  readonly type: string = RESET_COUNTER;
  constructor(public payload: number) {}
}
export const SUB_COUNTER = 'SUB_COUNTER';
export class SUBAction implements Action {
  readonly type: string = SUB_COUNTER;
  constructor(public payload: number) {}
}

export type CounterActions = AddAction | ResetAction | SUBAction | any;

// import { createAction, props } from '@ngrx/store';

// export const counter = createAction(
//   'COUNTER',
//   props<{ counter: number;}>()
// );
