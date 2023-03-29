import { IProduct } from "../../types";
import {IHeaderTitle} from '../../types/index'

export interface ProductTableProps {
  tableHeaderTitle:IHeaderTitle[],
  productsTableList:IProduct[]
  sortBy: (sortValue:string,sortOrder:string) => void
}