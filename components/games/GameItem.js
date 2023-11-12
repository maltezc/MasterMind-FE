import React from 'react';

const GameItem = (props) => {

    console.log("-> props", props);
    const {id, player1_name, player2_name, players_count, number_to_guess, attempts, status} = props
    return (
        <div>
            <p>Game #{id}</p>
            {status === "COMPLETED" && <p>number_to_guess: {number_to_guess}</p>}
            <p>player1_name: {player1_name}</p>
            {player2_name && <p>{player2_name}</p>}
            <p>players_count: {players_count}</p>
            <p>attempts count: {attempts.length}</p>
            {/*<p>status: {status}</p>*/}
        </div>
    );
};

export default GameItem;
