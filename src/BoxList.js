import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css'


const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), width:'250px', height:'250px', backgroundColor:'teal'},
        {id: uuid(), width:'250px', height:'250px', backgroundColor:'orange'}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }
    const removeBox = (idRemove) => {
        setBoxes(boxes => boxes.filter(box => box.id !== idRemove));
    } 

    return (
        <div className="BoxList">
            <h3>ALL THE BOXES!</h3>
            <NewBoxForm addBox={addBox} />
            <div className="BoxList-div">
                {boxes.map(({ id, width, height, backgroundColor }) => <Box id={id} width={width} height={height} backgroundColor={backgroundColor} key={id} removeBox={removeBox} />)}
            </div>
        </div>
    )
}

export default BoxList;