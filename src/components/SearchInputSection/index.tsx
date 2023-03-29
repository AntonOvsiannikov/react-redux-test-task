import React,{FC,useState,useEffect} from 'react';
import './styles.scss';
import SearchInput from '../SearchInput';
import { SearchInputSectionProps,ISearchParams } from './type';
import SearchCheckbox from '../SearchCheckbox';

const SearchInputSection:FC<SearchInputSectionProps> = ({handlerFunction}) => {
  const [searchParams,setSearchPrams] = useState<ISearchParams>({searchValue:'',searchCheckbox:'title'})

  const getSearch = async(searchParams:ISearchParams) => {
    await handlerFunction(searchParams);
  }
  useEffect(()=> {
    getSearch(searchParams);
  },[searchParams]);
  return (
    <div className={'search-section'}>
      <SearchInput getSearchParams={setSearchPrams} searchParams={searchParams}/>
      <SearchCheckbox getSearchParams={setSearchPrams} searchParams={searchParams}/>
    </div>
  )
}

export default SearchInputSection;