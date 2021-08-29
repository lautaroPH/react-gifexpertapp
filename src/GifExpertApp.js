import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {

    const [categories, setCateogories] = useState(['one punch']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCateogories}
            />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
