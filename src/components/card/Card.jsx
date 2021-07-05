import React, {useState} from 'react';
import image from './skill7.jpg';
import './card.scss';
import Bouton from '../bouton/Bouton';
import Detail from '../modal/Detail';

const Card = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="card">
            <img className="card__image" src = {image} alt = "projectImage" />
            <div className="card__description">
                <h3>project title</h3>
                <div className = 'card__action'>
                    <Bouton title='Detail' handleClick = {()=> setOpen(true)}/>
                    <Bouton title='Delete'/>
                </div>
            </div>
            <Detail open = {open} close = {()=>setOpen(false)}/>
        </div>
    );
}

export default Card;
