import { IProduct, IResponse } from "../../types"

export const addProductAction = (product:IProduct) => {
  return {
    type:"ADD_PRODUCT_ITEM",
    product
  }
}
export const deleteProductAction = (id:number) => {
  return {
    type:"DELETE_PRODUCT_ITEM",
    id
  }
}
export const editProductAction = (updateProduct:IProduct) => {
  return {
    type:"EDIT_PRODUCT_ITEM",
    updateProduct
  }
}
export const updateProductListAction = (products:IResponse) => {
  return {
    type:"UPDATE_PRODUCT_LIST",
    products
  }
}