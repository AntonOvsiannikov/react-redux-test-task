import React,{FC} from 'react';
import './styles.scss';
import {TableCellProps} from './type';

const TableCell:FC<TableCellProps> = ({item}) => {
  return (
    <div className={'table-cell'}>
      {item}
    </div>
  )
}

export default TableCell;