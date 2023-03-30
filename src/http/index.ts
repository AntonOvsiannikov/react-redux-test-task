import { IOptions, IResponse,IAddOptions } from '../types/index';
export const API_BASE_URL = 'https://dummyjson.com/';


const request = (options: IOptions | IAddOptions) : Promise<string | IResponse> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true"
  })
  const defaults = {headers:headers};
  options = Object.assign({}, defaults, options);
  return fetch(options.url, options)
  .then(response => 
      response.json().then((json: string) => {
          if(!response.ok) {
              return Promise.reject(json);
          }
          return json;
      })
  );
}


export function searchProduct(value:string,searchParams:string) {
  if(searchParams === 'title') {
    return request({
      url: API_BASE_URL + `products/search?q=${value}`,
      method: 'GET',
    });
  }
  return request({
      url: API_BASE_URL + `products`,
      method: 'GET',
  });
}
export function addProduct(product:any) {
  return request({
      url: API_BASE_URL + "products/add",
      method: 'POST',
      body: JSON.stringify(product)
  });
}
export function editProduct(product:any,id:number) {
  return request({
      url: API_BASE_URL + `products/${id}`,
      method: 'PUT',
      body: JSON.stringify(product)
  });
}
export function deleteProduct(id:number) {
  return request({
      url: API_BASE_URL + `products/${id}`,
      method: 'DELETE',
  });
}
