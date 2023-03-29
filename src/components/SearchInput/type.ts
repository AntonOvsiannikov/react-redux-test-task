import { ISearchParams } from "../SearchInputSection/type";

export interface SearchInputProps {
  getSearchParams:(searchValue: ISearchParams) => void,
  searchParams:ISearchParams
}