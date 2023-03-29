import React,{FC} from 'react';
import { SearchInputProps } from './type';
import './styles.scss';

const SearchInput:FC<SearchInputProps> = ({getSearchParams,searchParams}) => {

  const handlerChange = (value:string) => {
    getSearchParams({...searchParams,searchValue:value});
  }

  return (
    <input 
      className='search-field'
      type="text"
      placeholder='Enter a product name'
      onChange={e => handlerChange(e.target.value)}
    />
  )
}

export default SearchInput;
