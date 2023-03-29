import React,{FC} from 'react';
import ImageCell from '../ImageCell';
import TableCell from '../TableCell';
import './styles.scss';
import {TableRowProps} from './type';

const TableRow:FC<TableRowProps> = ({item}) => {
  return (
    <div className={'table-row'}>
      <TableCell item={item.id}/>
      <TableCell item={item.title}/>
      <TableCell item={item.description}/>
      <TableCell item={item.price}/>
      <ImageCell url={item.images[0]}/>
      <TableCell item={item.rating}/>
      <TableCell item={item.stock}/>
      <TableCell item={item.category}/>
    </div>
  )
}

export default TableRow;