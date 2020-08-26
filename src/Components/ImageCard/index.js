import React from "react";

import "./style.css";

const ImageCard = (props) =>{
    return(
        // eslint-disable-next-line
        <img className="image-card" src={props.url} />
    );
}

export default ImageCard