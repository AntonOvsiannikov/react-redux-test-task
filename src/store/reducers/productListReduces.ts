import { IResponse } from "../../types";

const defaultState:IResponse = {limit:0,products:[],skip:0,total:0};

export const productListReduces = (state = defaultState,action:any) => {
  let productList = state.products.slice();

  switch(action.type) {
    case"ADD_PRODUCT_ITEM":
      productList.push(action.product);
      return {...state,products:productList};
    case"DELETE_PRODUCT_ITEM":
      productList = productList.filter(arrItem => arrItem.id !== action.id)
      return {...state,products:productList};
    case"EDIT_PRODUCT_ITEM":
      console.log(action);
      productList = productList.map(arrItem => arrItem.id === action.updateProduct.id ? action.updateProduct : arrItem)
      return {...state,products:productList};
    case"UPDATE_PRODUCT_LIST":
      productList = action.products;
      return productList;
    default:
      return state;
  }

}