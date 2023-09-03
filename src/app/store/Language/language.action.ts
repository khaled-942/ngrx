// import { Action } from '@ngrx/store';

// export class LanguageAction implements Action {
//   readonly type = 'SET_LANGUAGE';
//   constructor(public payload: string) {
//     console.log('fire from action', payload)
//   }
// }
 

import { createAction, props } from '@ngrx/store';

export const setLanguage = createAction(
  // type
  'SET_LANGUAGE',
  // payload
  props<{ lang: string;}>()
);