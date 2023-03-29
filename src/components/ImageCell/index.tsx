import React,{FC} from 'react';
import './styles.scss';
import {ImageCellProps} from './type';

const ImageCell:FC<ImageCellProps> = ({url}) => {
  return (
    <div className={'table-cell'}>
      <img
        className={'table-cell__image'} 
        src={url} 
        alt="" />
    </div>
  )
}

export default ImageCell;