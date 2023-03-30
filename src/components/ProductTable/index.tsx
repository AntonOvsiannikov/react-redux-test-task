import './styles.scss';
import Table from '../Table';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { productListSelector,filterSelector } from '../../store/selector/index';
import { sortArrByValue } from '../../utils';
import { updateProductListAction } from '../../store/action/productListAction';
import { changeFilterAction } from '../../store/action/filterAction';
import { IResponse } from '../../types';
const tableHeaderTitle = [
  {title:'ID',subtitle:'id'},
  {title:'Назва',subtitle:'title'},
  {title:'Опис',subtitle:'description'},
  {title:'Ціна',subtitle:'price'},
  {title:'Фото',subtitle:'images'},
  {title:'Рейтинг',subtitle:'rating'},
  {title:'Сток',subtitle:'stock'},
  {title:'Категорія',subtitle:'category'},
];

const ProductTable= () => {
  const dispatch = useDispatch();
  const productsList:IResponse = useSelector(productListSelector);
  const selectedFilter:string = useSelector(filterSelector);

  const sortBy = (sortValue:string) => {
    if(selectedFilter === sortValue && productsList.products.length) {
      dispatch(changeFilterAction(''));
      dispatch(updateProductListAction({
        ...productsList,products:sortArrByValue(productsList.products,sortValue,'ASC')
      }));
    } else {
      dispatch(changeFilterAction(sortValue));
      dispatch(updateProductListAction({
        ...productsList,products:sortArrByValue(productsList.products,sortValue,'DESC')
      }));
    }
  }

  return (
    <div className={'table-wrapper'}>
      <Table handlerSort={sortBy} productsTableList={productsList.products} tableHeaderTitle={tableHeaderTitle} selectHeader={selectedFilter}/>
    </div>
  )
}

export default ProductTable;
