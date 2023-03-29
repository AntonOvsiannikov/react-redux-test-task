import {useState} from 'react';
import PageTitle from '../components/PageTitle/index';
import ProductTable from '../components/ProductTable';
import SearchInputSection from '../components/SearchInputSection';
import { IProduct, IResponse } from '../types';
import {searchProduct} from '../http/index';
import {sortArr, sortArrByValue} from '../utils/index';
import { ISearchParams } from '../components/SearchInputSection/type';
import LinkToButton from '../components/LinkToButton';

const tableHeaderTitle = [
  {title:'ID',subtitle:'id'},
  {title:'Назва',subtitle:'title'},
  {title:'Опис',subtitle:'description'},
  {title:'Ціна',subtitle:'price'},
  {title:'Фото',subtitle:'images'},
  {title:'Рейтинг',subtitle:'rating'},
  {title:'Сток',subtitle:'stock'},
  {title:'Категорія',subtitle:'category'},
];

const HomePage = () => {
  const [productsList,setProductsList] = useState<IResponse>({limit:0,products:[],skip:0,total:0});

  const searchProducts = async(searchParams:ISearchParams) => {
    const product:IResponse | string = await searchProduct(searchParams.searchValue,searchParams.searchCheckbox);
    if (typeof product === 'string')  return;
    if(product.products.length !== 0) {
      const newArr = sortArr(product.products,searchParams.searchValue,searchParams.searchCheckbox);
      setProductsList({...product,products:newArr});
      return;
    } else {
      setProductsList({limit:0,products:[],skip:0,total:0})
    }
  }
  const sortBy = (sortValue:string,sortOrder:string) => {
    if(productsList.products.length) {
      setProductsList({...productsList,products:sortArrByValue(productsList.products,sortValue,sortOrder)});
    }
  }
  // sortBy('price','ASC');
  return (
    <div className="container-wrapper">
      <div className="container">
        <PageTitle title={'Table of products'}/>
        <SearchInputSection handlerFunction={searchProducts}/>
        <ProductTable sortBy={sortBy} productsTableList={productsList.products} tableHeaderTitle={tableHeaderTitle}/>
        <LinkToButton btnText={'<< Go to create product'} side={'left'} link={'/create'}/>
      </div>
    </div>
  )
}

export default HomePage;