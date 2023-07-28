import React, { useContext } from "react";
import { gifContext } from "./GifListContainer";

function GifList() {
    const gifContextFromParent = useContext(gifContext);
    // console.log(gifContextFromParent);

    return <ul>
        {gifContextFromParent.map((gif) => (
            <li key={gif.id}>
                <img src={gif.images.original.url} alt={gif.type} />
            </li>
        ))}
    </ul>;
}

export default GifList;