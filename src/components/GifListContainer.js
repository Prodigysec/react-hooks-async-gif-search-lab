import React from "react";
import { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifData, setGifData] = useState([]);

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=Meerkat&api_key=qEh0wcEeKHnzAG0RoTb8tswU7DrgJbmG&rating=g")
            .then((res) => res.json())
            .then((gifData) => setGifData(gifData.data.slice(0, 3)));
    }, []);

    console.log(gifData);

}

export default GifListContainer;