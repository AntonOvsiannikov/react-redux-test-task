import { IOptions, IResponse } from '../types/index';
export const API_BASE_URL = 'https://dummyjson.com/';


const request = (options: IOptions) : Promise<string | IResponse> => {
  const defaults = {};
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
