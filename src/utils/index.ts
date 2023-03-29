import { IProduct } from "../types/index";

export const sortArr = (arr:IProduct[],searchValue:string,searchSelect:string) => {
  if(searchSelect === 'title') {
    return arr.filter(arrItem => arrItem.title.includes(searchValue));
  }
  return arr.filter(arrItem => arrItem.category.includes(searchValue));
}
export const sortArrByValue = (arr:IProduct[],sortValue:string,sortOrder:string) => {
  if(sortOrder === 'ASC') {
    return arr.sort((a,b) => a[sortValue as keyof IProduct] > b[sortValue as keyof IProduct] ? 1 : -1);
  }
  return arr.sort((a,b) => a[sortValue as keyof IProduct] < b[sortValue as keyof IProduct] ? 1 : -1);
}
