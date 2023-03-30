import {useEffect} from 'react';
import './styles.scss';
import SearchInput from '../SearchInput';
import {ISearchParams} from './type';
import SearchCheckbox from '../SearchCheckbox';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { updateProductListAction } from '../../store/action/productListAction';
import { changeSearchAction } from '../../store/action/searchAction';
import { searchProduct } from '../../http';
import { IResponse } from '../../types';
import { sortArr } from '../../utils';
import { searchValueSelector } from '../../store/selector/index';

const SearchInputSection = () => {
  const dispatch = useDispatch();
  const searchValue:ISearchParams = useSelector(searchValueSelector);
  
  const getSearch = async(searchParams:ISearchParams) => {
    const product:IResponse | string = await searchProduct(searchParams.searchValue,searchParams.searchCheckbox);
    if (typeof product === 'string')  return;
    if(product.products.length !== 0) {
      const newArr = sortArr(product.products,searchParams.searchValue,searchParams.searchCheckbox);
      dispatch(updateProductListAction({...product,products:newArr}));
    } else {
      dispatch(updateProductListAction({limit:0,products:[],skip:0,total:0}))
    }
  }
  const updateSearchParams = (value:ISearchParams) => {
    dispatch(changeSearchAction(value));
  }
  useEffect(()=> {
    getSearch(searchValue);
  },[searchValue]);

  return (
    <div className={'search-section'}>
      <SearchInput getSearchParams={updateSearchParams} searchParams={searchValue}/>
      <SearchCheckbox getSearchParams={updateSearchParams} searchParams={searchValue}/>
    </div>
  )
}

export default SearchInputSection;