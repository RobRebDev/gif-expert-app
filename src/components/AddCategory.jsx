import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState("")

    const onInputChanche = ({ target }) => {

        setInputValue(target.value)

    }

    const onSubmit = (event) => {

        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit}>

            <input
                type='text'
                placeholder='Search GIFs'
                value={inputValue}
                onChange={onInputChanche}

            />
        </form>
    )
}