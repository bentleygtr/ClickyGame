import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul id="score" className="nav nav-pills nav-justified">
            <li><a href="/" style={{color: "black"}}>Memory Click Game</a> <br></br></li>
            
            <li 
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li style={{color: "black"}}>Score: {props.curScore} | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;