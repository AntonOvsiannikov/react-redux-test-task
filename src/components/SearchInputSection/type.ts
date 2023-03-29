export interface SearchInputSectionProps {
  handlerFunction:(searchValue: ISearchParams) => Promise<void>
}
export interface ISearchParams {
  searchValue:string,
  searchCheckbox:string
}