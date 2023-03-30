export interface IOptions {
  url:string,
  method:string,
}
export interface IAddOptions {
  url:string,
  method:string,
  body:string
}
export interface IProduct {
  brand:string,
  category:string,
  description:string,
  discountPercentage:number,
  id:number,
  images:string[],
  price:number,
  rating:number,
  stock:number,
  thumbnail:string,
  title:string
}
export interface IResponse {
  limit:number,
  products:IProduct[],
  skip:number,
  total:number,
}
export interface IHeaderTitle {
  title:string,
  subtitle:string
}
export interface IFormValue {
  title:string,
  author:string,
  releaseYear:number,
  rating:number
}