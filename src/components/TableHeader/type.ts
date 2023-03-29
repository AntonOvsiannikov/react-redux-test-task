import { IHeaderTitle } from "../../types";

export interface TableHeaderProps {
  tableHeaderTitle:IHeaderTitle[],
  selectHeader:string | undefined,
  handlerSort: (sortValue:string) => void
}