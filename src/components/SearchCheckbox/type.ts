import { ISearchParams } from "../SearchInputSection/type";

export interface SearchCheckboxProps {
  getSearchParams:(searchValue: ISearchParams) => void,
  searchParams:ISearchParams
}