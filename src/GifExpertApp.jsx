import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dinosaur'])


    const onAddCategory = (value) => {

        if (categories.includes(value)) return

        setCategories(c => [value, ...c])

    }

    return (
        <>
            <h1>Gift Expert APP</h1>
            <AddCategory
                onNewCategory={(value => { onAddCategory(value) })}
            />
            {categories.map(
                (category) => (
                    <GifGrid key={category} category={category} />
                )
            )}
        </>
    )
}

export default GifExpertApp
