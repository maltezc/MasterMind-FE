import React, {useRef} from 'react';
import Header from "@/components/layout/header";
import Textbox from "@/components/ui/Textbox";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {useRouter} from "next/router";

const NewGameForm = () => {
    const router = useRouter();

    const playerName = useRef("");
    const difficulty = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Firing handleSubmit`)
        console.log("-> playerName: ", playerName.current);
        console.log("-> difficulty: ", difficulty.current);

        createNewGame(playerName.current, difficulty.current)
        // createReservation(id, startDate, endDate, bookingLength, totalExact)
    }

    const createNewGame = async (playerName, difficulty) => {

        // const createReservation = async (listingId, startDate, endDate, duration, total) => {
        console.log("-> playerName", playerName);
        console.log("-> difficulty", difficulty);

        const transformedData = {
            player1_name: playerName,
            difficulty: difficulty,
        }

        try {
            console.log(`createGame fired`)
            // todo: might need to update backend to take in more data like taxes, racklyfe fee, etc.
            const res = await fetch(`http://127.0.0.1:5000/api/games/`, {
            // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/games`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(transformedData)
            })

            const response = await res.json();
            console.log("-> newGame", response);

            const { game } = response;
            const exploreLink = `/games/${game.id}`;
            // todo: go to games page
            router.push(exploreLink)
        } catch (e) {
            console.error("Error while creating reservation: ", e.message)

            // TODO: ADD state for errors.
            // In your component's render:
            /* setError(error.message); */ // TODO: SET UP STATE
            /*{ error && <p className="error-message">{error}</p> }*/ // TODO: PUT THIS THE RETURN BELOW
        }
    }

    const homeLink = `/`;


    return (
        <>
            <Header title='New Game Form'/>

            <div className='flex flex-row justify-center mt-10'>
                <div className='w-2/4'>
                    <Link
                        href={homeLink}
                        // className="flex flex-row my-4 justify-center accent-blue-500">
                        className="text-xl underline hover:text-blue-500 hover:underline focus:outline-none">
                        Home
                        {/*{listing.title}*/}
                    </Link>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-row justify-center mt-10'>

                    <div className='w-2/4'>

                        <div className='flex flex-col'>
                            {/*Set Player Name*/}
                            <Textbox
                                labelText='Player Name: '
                                placeholderText='Your name'
                                required={true}
                                onChange={(e) => (playerName.current = e.target.value)}
                            />

                            {/* Set Difficulty */}
                            <div className='mt-10'>
                                <Textbox
                                    labelText='Difficulty: '
                                    placeholderText='Enter one of the following: easy, medium, hard, or legendary'
                                    required={true}
                                    onChange={(e) => (difficulty.current = e.target.value)}
                                />
                                {/*<HorizontalRadio/>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <Button
                    className='flex flex-row my-4 justify-center accent-blue-500'
                    // onClick={handleNewGameClick}
                    buttonText="New Game"
                    type='submit'
                />
            </form>
        </>
    );
};

export default NewGameForm;
