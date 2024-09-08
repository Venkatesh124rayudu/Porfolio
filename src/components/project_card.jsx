import React from "react";
import './Project.css';

function Project_card(props){
    return <>
        <div className="card-container">
        <div class="card">
        <div class="card-details">
            <p class="text-title"><h1>{props.title}</h1></p>
            <p class="text-body">{props.discription}</p>
        </div>
            <button class="card-button"><a className="a" target="_blank" href={props.github}>GitHub repo</a></button>
        </div>
</div>
    </>;
}
export default Project_card;