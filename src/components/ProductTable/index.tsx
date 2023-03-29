import React,{FC,useEffect,useState} from 'react';
import './styles.scss';
import { ProductTableProps } from './type';
import Table from '../Table';

const ProductTable:FC<ProductTableProps> = ({productsTableList,tableHeaderTitle,sortBy}) => {
  const [selectedFilterValue,setSelectedFilterValue] = useState<string | undefined>('');

  const handlerSort = (sortValue:string) => {
    if(selectedFilterValue === sortValue) {
      setSelectedFilterValue('');
      sortBy(sortValue,'ASC');
    } else {
      setSelectedFilterValue(sortValue);
      sortBy(sortValue,'DESC');
    }
  }
  return (
    <div className={'table-wrapper'}>
      <Table handlerSort={handlerSort} productsTableList={productsTableList} tableHeaderTitle={tableHeaderTitle} selectHeader={selectedFilterValue}/>
    </div>
  )
}

export default ProductTable;
