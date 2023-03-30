import {IFilterAction} from '../type';

const defaultState = '';

export const filterReduces = (state=defaultState,action:IFilterAction) => {
  switch(action.type) {
    case"SET_FILTER":
      return action.payload;
    default:
      return state;
  }
}