import { combineReducers } from "redux";
import {productListReduces} from './productListReduces';
import {filterReduces} from './filterReduces';
import {searchReduces} from './searchReduces'
export const rootReducer = combineReducers({
  productList:productListReduces,
  filter:filterReduces,
  search:searchReduces
})