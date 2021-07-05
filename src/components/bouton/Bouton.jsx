import React from 'react';
import './bouton.scss';

const Bouton = ({title, handleClick}) => {
    return  <button onClick = {()=>handleClick()} >{title}</button>;    
}
export default Bouton;
