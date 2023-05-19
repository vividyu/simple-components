import React, { useState, useEffect } from "react";
import axios from "axios";

function Card() {
    const [images, setImages] = useState([]);
    const [curPage, setCurPage] = useState(0);

    useEffect(() => {
        async function fetchdata() {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/photos");
            //console.log(resp);
            const slicedData = resp.data.slice(0, 3);
            //console.log(slicedData);
            setImages(slicedData);
        };
        fetchdata();

    }, [])

    const handlePrev = () => {
        const len = images.length;
        if (len === 0) return;

        const newPage = curPage === 0 ? len - 1 : curPage - 1;
        setCurPage(newPage);

    }
    const handleNext = () => {
        const len = images.length;
        if (len === 0) return;

        const newPage = curPage === len - 1 ? 0 : curPage + 1;
        setCurPage(newPage);

    }


    return (
        <>
            <button onClick={handlePrev}>Prev</button>
            {images.length > 0 && <img src={images[curPage].thumbnailUrl} />}
            <button onClick={handleNext}>Next</button>
        </>
    );



}

export default Card;