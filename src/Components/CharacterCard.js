import React from 'react';

export default function CharacterCard(props){
    return(
        <div>
            <img src={props.chars.image} alt="rick and morty" />
            <h3>{props.chars.name}</h3>
            <p>Status: {props.chars.status}</p>
            <p>Species: {props.chars.species}</p>
        </div>
    );
}