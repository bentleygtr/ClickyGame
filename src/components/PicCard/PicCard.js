import React from "react";
import "./PicCard.css";

const PicCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPic(props.cover)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.cover} src={props.image} />
            </a>
        </div>
    </div>
);

export default PicCard;