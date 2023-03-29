import React,{FC} from 'react';
import './styles.scss';
import TableHeader from '../TableHeader/index';
import { TableProps } from './type';
import TableRow from '../TableRow';

const Table:FC<TableProps> = ({productsTableList,tableHeaderTitle,selectHeader,handlerSort}) => {
  const arr = true;
  return (
    arr 
    ? <div className='table'>
      <TableHeader handlerSort={handlerSort} tableHeaderTitle={tableHeaderTitle} selectHeader = {selectHeader}/>
      {
        productsTableList.map((arrItem,index) => <TableRow key={index} item={arrItem}/>)
      }
    </div>
    : <div className='loader'>loading ...</div>
  )
}

export default Table;