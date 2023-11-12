import React from 'react';
import GameItem from "@/components/games/GameItem";

const GameList = (props) => {

    const { games } = props;

    return (
        <div>
            <ul className='space-y-12'>
                {games.map(game => (
                    <GameItem
                    key={game.id}
                    id={game.id}
                    players_count={game.players_count}
                    player1_name={game.player1_name}
                    number_to_guess={game.number_to_guess}
                    attempts={game.attempts}
                    status={game.status}
                    />
                ))}
            </ul>
        </div>
    );
};

export default GameList;
