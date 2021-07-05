import React from 'react';
import Card from '../card/Card';
import './container.scss';

const Container = () => {
    return (
        <div className='container'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
    );
}

export default Container;
