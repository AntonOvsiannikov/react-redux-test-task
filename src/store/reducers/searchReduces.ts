import {ISearchValueAction} from '../type';

const defaultState = {searchValue:'',searchCheckbox:'title'};

export const searchReduces = (state=defaultState,action:ISearchValueAction) => {
  switch(action.type) {
    case"SET_SEARCH_VALUE":
      return action.payload;
    default:
      return state;
  }
}