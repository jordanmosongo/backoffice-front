import React, {useState} from 'react';
import Bouton from '../bouton/Bouton';
import Container from '../container/Container';
import Project from '../modal/Project';
import Title from '../title/Title';
import './main.scss';

const Main = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="main">
            <div className="main__container">    
                <Title title = "Realised projects"/>            
                <Bouton title = "new project" handleClick = {()=>setOpen(true)}/>
                <Container/>
                <Project open = {open} close = {()=>setOpen(false)}/>
            </div>
        </div>
    );
}

export default Main;
