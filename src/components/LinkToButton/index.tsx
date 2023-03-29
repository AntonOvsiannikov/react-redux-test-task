import React,{FC} from 'react';
import {LinkToButtonProps} from './type';
import {Link} from 'react-router-dom';
import './styles.scss';

const LinkToButton:FC<LinkToButtonProps> = ({btnText,side,link}) => {
  return (
    <div className={`link-btn ${side}`}>
      <Link className={'link-btn__text'} to={link}>
        {btnText}
      </Link>
    </div>
  )
}

export default LinkToButton;