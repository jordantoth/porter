import React from 'react';

function ListItem({ id, myText, isChecked, onChange }) {
    console.log(myText);
    return (
        <div>
            <input
                id={id}
                checked={isChecked}
                onChange={onChange}
                type='checkbox'
            ></input>
            <label htmlFor='id1'>{myText}</label>
        </div>
    )
}

export default ListItem