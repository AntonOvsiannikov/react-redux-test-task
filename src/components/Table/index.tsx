import React,{FC} from 'react';
import './styles.scss';
import TableHeader from '../TableHeader/index';
import { TableProps } from './type';
import TableRow from '../TableRow';

const Table:FC<TableProps> = ({productsTableList,tableHeaderTitle,selectHeader,handlerSort}) => {
  return (
    productsTableList.length 
    ? <div className='table'>
      <TableHeader handlerSort={handlerSort} tableHeaderTitle={tableHeaderTitle} selectHeader = {selectHeader}/>
      {
        productsTableList.map((arrItem,index) => <TableRow key={index} item={arrItem}/>)
      }
    </div>
    : <div className='loader'>Nothing found...</div>
  )
}

export default Table;