import { IProduct } from "../../types";
import { IHeaderTitle } from "../../types";


export interface TableProps {
  tableHeaderTitle:IHeaderTitle[],
  productsTableList:IProduct[],
  selectHeader:string | undefined,
  handlerSort: (sortValue:string) => void
}