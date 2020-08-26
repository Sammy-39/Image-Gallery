import React from "react";

import "./style.css";

import ImageCard from "../ImageCard/index";

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            images: []
        };
    }

    onTextChange = (e) =>{
        this.setState({
            inputValue: e.target.value
        });
    };

    onImageAdd = () => {
        const newImages = [...this.state.images];

        newImages.push(this.state.inputValue);

        this.setState({
            images: newImages
        });

        this.clearInput();
    };

    onImageRemove = () => {
        this.setState({
            images: this.state.images.slice(0,this.state.images.length-1)
        });

        this.clearInput();
    };
      
    clearInput = () => {
        this.setState({
            inputValue: ""
        });
    };

    render = () =>{
        return(
            <div className="gallery-container">
                <p className="title"> ---------- Image Gallery ---------- </p>
                <div className="input-area">
                    
                    <input type = "text"
                       className="add-input"
                       placeholder="Enter image URL"
                       onChange={this.onTextChange}
                       value={this.state.inputValue} 
                    />

                    <button onClick={this.onImageAdd} className="add-btn">
                        Add
                    </button>

                    <button onClick={this.onImageRemove} className="add-btn">
                        Remove
                    </button>

                </div>  
                <div className="gallery-area">
                    {this.state.images.map((imageurl) => {
                        return <ImageCard key={imageurl} url={imageurl} />;
                    })}
                </div>     
            </div>
        );
    };

};

export default Gallery;

