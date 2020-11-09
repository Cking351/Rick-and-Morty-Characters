import React from 'react';
import CardStyle from './CardStyle';

const Character = props => {
    return (
        <CardStyle>
            <img src={props.cards.image} />
            <h3>{props.cards.name}</h3>
            <h5>Status: {props.cards.status}</h5>
            <h5>Gender: {props.cards.gender}</h5>
            <h5>Species: {props.cards.species}</h5>
        </CardStyle>
    )
}

export default Character;