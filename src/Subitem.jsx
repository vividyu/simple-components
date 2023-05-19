import React, { useState } from "react";
import { v4 } from 'uuid';
const LOAD_RECORD_NUM = 3;

function Subitem() {
    const [serialNum, setSerialNum] = useState(0);
    const [Item, setItem] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [loadNum, setLoadNum] = useState(LOAD_RECORD_NUM);

    const handleAdd = () => {
        // Compute the new serial number based on the old one
        const newSerialNum = serialNum + 1;

        // Update the serial number in the state
        setSerialNum(newSerialNum);

        // Add a new item with the new serial number
        setItem((prevItem) => {
            return [...prevItem, { id: v4(), title: newSerialNum, status: false }];
        });
    }

    const handleExpand = (id) => {
        setItem((prevItem) => {
            return prevItem.map((item) => {
                if (item.id === id) {
                    return { ...item, status: !item.status }
                } else {
                    return item;
                }
            });
        })
    }

    const handleChange = (e) => {
        const curKeyword = e.target.value;
        setKeyword(curKeyword);
        if(curKeyword === ""){
            setLoadNum(LOAD_RECORD_NUM);
        }
    }

    const generateLi = () => {
        if (keyword === "") {
            return Item.map((item) => {
                if (item !== null) return (
                    <li key={item.id} onClick={() => handleExpand(item.id)}><p>ID{item.title}: {item.id}</p>
                        {item.status && <p>Subitem sn is {item.title}</p>}
                    </li>
                )
            })
        }

        else {
            return Item.filter(item => item.id.includes(keyword)).slice(0, loadNum).map((item) => {
                if (item !== null) return (
                    <li key={item.id} onClick={() => handleExpand(item.id)}><p>ID{item.title}: {item.id}</p>
                        {item.status && <p>Subitem sn is {item.title}</p>}
                    </li>
                )
            })
        }

    }

    const handleLoadMore = () => {
        const len = Item.length;
        setLoadNum((prevLoadnum)=>{
            if(prevLoadnum >= len) return len;
            else return prevLoadnum + LOAD_RECORD_NUM;
        })
        console.log(loadNum);
    }

    return (
        <>
            <input placeholder="Search something..." type="text" value={keyword} onChange={handleChange}></input>
            <h2>This is a subitem list</h2>

            {keyword === "" && <button onClick={handleAdd}>Add</button>}

            <ul>
                {generateLi()}
            </ul>

            {keyword !== "" && <button onClick={() => handleLoadMore()}>Load more...</button>}

        </>
    );


}

export default Subitem;
