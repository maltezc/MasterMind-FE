import React from 'react';

const GameItem = (props) => {

    console.log("-> props", props);
    const {id, player1_name, players_count, number_to_guess, attempts, status} = props
    return (
        <div>
            <p>game item</p>
            <p>id: {id}</p>
            <p>number_to_guess: {number_to_guess}</p>
            <p>player1_name: {player1_name}</p>
            <p>players_count: {players_count}</p>
            <p>attempts count: {attempts.length}</p>
            <p>status: {status}</p>
        </div>
    );
};

export default GameItem;
