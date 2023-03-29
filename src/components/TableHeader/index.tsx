import React,{FC} from 'react';
import './styles.scss';
import { TableHeaderProps } from './type';

const TableHeader:FC<TableHeaderProps> = ({tableHeaderTitle,selectHeader,handlerSort}) => {

  const handlerClick = (value:any) => {
    handlerSort(value);
  }
  return (
    <div className={'table-row__header'}>
      {
        tableHeaderTitle.map((arrItem,index) => <div
         key={index} 
         data-sort-value={arrItem.subtitle}
         className={`table-row__header-cell ${selectHeader === arrItem.subtitle ? 'select' : ''}`}
         onClick={e => handlerClick(e.currentTarget.dataset.sortValue)}
        >
          {arrItem.title}
        </div>)
      }
    </div>
  )
}

export default TableHeader;