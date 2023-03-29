import React,{FC} from 'react';
import { PageTitleProps } from './type';
import './styles.scss';

const PageTitle:FC<PageTitleProps> = ({title}) => {
  return (
    <div className={'title'} >
      {title}
    </div>
  )
}

export default PageTitle;
