import React,{FC} from 'react';
import ImageCell from '../ImageCell';
import TableCell from '../TableCell';
import './styles.scss';
import {TableRowProps} from './type';
import { useDispatch } from 'react-redux/es/exports';
import { deleteProductAction } from '../../store/action/productListAction';

const TableRow:FC<TableRowProps> = ({item}) => {
  const dispatch = useDispatch();
  const deleteProduct =(id:number) => {
    const deleteResult = window.confirm('You want delete product?');
    if(deleteResult) {
      dispatch(deleteProductAction(id));
    }
  }
  return (
    <div className={'table-row'} onClick={e => deleteProduct(item.id)}>
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