import React, { useState } from "react";
import { v4 } from 'uuid';

function Subitem() {
    const [serialNum, setSerialNum] = useState(0);
    const [Item, setItem] = useState([]);
    const [keyword, setKeyword] = useState(null);

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

        setItem((prevItem) => {
            return prevItem.filter((item) => item.title <= curKeyword);
        })

    }

    return (
        <>
            <h2>This is a subitem list</h2>
            <input type="text" value={keyword} onChange={handleChange}></input>
            <ul>
                {Item.map((item) => {
                    if (item !== null) return (
                        <li key={item.id} onClick={() => handleExpand(item.id)}><p>list item is {item.title}</p>
                            {item.status && <p>Subitem sn is {item.title}</p>}
                        </li>
                    )
                })}
            </ul>

            <button onClick={handleAdd}>Add</button>
        </>
    );

}

export default Subitem;
