import React,{FC} from 'react';
import './styles.scss';
import {SearchCheckboxProps} from './type';

const SearchCheckbox:FC<SearchCheckboxProps> = ({getSearchParams,searchParams}) => {
  const handlerChange = (value:string) => {
    getSearchParams({...searchParams,searchCheckbox:value});
  }

  return (
    <div className='checkbox'>
      <div className="checkbox-group">
        <input
            type="radio" name="contact" value="title"
            defaultChecked
            onChange={e => handlerChange(e.target.value)}
          />
          <label htmlFor="radio1">Назва</label>
      </div>
      <div className="checkbox-group">
        <input 
            type="radio" name="contact" value="category"
            onChange={e => handlerChange(e.target.value)}
          />
          <label htmlFor="radio2">Категорія</label>
      </div>
    </div>
  )
}

export default SearchCheckbox;
