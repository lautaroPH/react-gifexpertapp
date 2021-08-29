
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

export default function GifGrid({ category }) {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

             <div className="card-grid">
 
             {loading && <p>Loading</p>}


                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div> 
        </>
    )
}
