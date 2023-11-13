import React from 'react';
import Button from "@/components/ui/Button";
import {useRouter} from "next/router";

const GameItem = (props) => {
    const router = useRouter();
    const {
        id,
        player1_name,
        player2_name,
        players_count,
        number_to_guess,
        attempts,
        status,
        difficulty
    } = props

    const handleLoginClick = async (e) => {
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        await router.push(`/games/${id}`);
    }

    return (
        <div className='flex flex-col'>
            <p>Game #{id}</p>
            {status === "COMPLETED" && <p>number_to_guess: {number_to_guess}</p>}
            <p>player1_name: {player1_name}</p>
            {player2_name && <p>{player2_name}</p>}
            <p>players_count: {players_count}</p>
            <p>attempts count: {attempts.length}</p>
            <p>difficulty: {difficulty}</p>

            <Button
                className='flex flex-row my-4 accent-blue-500 ml-40'
                onClick={handleLoginClick}
                buttonText="Go to Game"
                type='button'
            >
            </Button>
        </div>
    );
};

export default GameItem;
