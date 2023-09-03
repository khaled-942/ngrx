// import { LanguageAction } from './language.action';

import { createReducer, on } from "@ngrx/store";
import { setLanguage } from "./language.action";

const initialLanguage = {
  currentLang: 'en',
  acceptedLangs: ['ar', 'en', 'fr'],
};
// export function languageReducer(
  //   state: any = initialLanguage,
  //   action: any = LanguageAction
  // ) {
//   switch (action.type) {
  //     case 'SET_LANGUAGE':
  //       console.log('fire from reducer', action.payload);
  //       return {
    //         ...state,
    //         currentLang: action.payload,
    //       };
    
    //     default:
//       return state;
//   }
// }

export const languageReducer = createReducer(
  initialLanguage,
  on(setLanguage, (state,{lang}) => ({ ...state, currentLang: lang }))
);