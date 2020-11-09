import React from 'react';
import CardStyle from './CardStyle';

const Character = props => {
    return (
        <CardStyle>
            <img src={props.cards.image} />
            <h2>{props.cards.name}</h2>
            <h4>Status: {props.cards.status}</h4>
            <h4>Gender: {props.cards.gender}</h4>
            <h4>Species: {props.cards.species}</h4>
        </CardStyle>
    )
}

export default Character;