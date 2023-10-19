import React from "react";
import './Box.css';

const Box = ({id, width, height, backgroundColor, removeBox}) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: backgroundColor
    };

    return (
    <div className="Box-container">
        <div style={style}></div>
        <div className="X" onClick={() => removeBox(id)}>X</div>
    </div>
        
    )

}


export default Box;