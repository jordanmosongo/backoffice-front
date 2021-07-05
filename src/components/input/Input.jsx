import React from 'react';

const Input = ({name, placeholder}) => {
    return (
        <div class="ui input">
            <input type="text" placeholder={placeholder} name = {name}/>
        </div>
    );
}

export default Input;
