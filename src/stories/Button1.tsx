
import React from 'react';
import './Button1.css';

interface btnProps{
  primary:boolean,
  backgroundColor:string,
  size: 'medium' | 'small' | 'large',
  label:string,
  className: Object,
  onClick?:()=>{

  }

}

export const Button1 = ({

  primary=false,
  size='medium',
  backgroundColor,
  label,
  ...props

}:btnProps) =>{


  
  return (

    <div>
      <button type='button' className={'storybook-button squareButton'} style={{ backgroundColor }}>{label}</button>
      
    </div>
  );
}

export default Button1;