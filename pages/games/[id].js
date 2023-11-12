import React, {useRef, useState} from 'react';
import Header from "@/components/layout/header";
import Textbox from "@/components/ui/Textbox";
import Button from "@/components/ui/Button";
import HomeButton from "@/components/ui/Buttons/HomeButton";
import Dropdown from "@/components/ui/Dropdown/Dropdown";

const Game = (props) => {
        const guess = useRef("");
        const [attemptResult, setAttemptResult] = useState("");
        const [attemptsRemaining, setAttemptsRemaining] = useState(null);
        const [hints, setHints] = useState(null);

        const {game} = props.data
        const {id, attempts, status, spaces, player1_name, player2_name} = game

        const handleSubmit = async (e) => {
            e.preventDefault();
            // console.log(`Firing guess - handleSubmit`)
            // console.log("-> guess", guess);
            await makeAttempt(id, guess.current)
        }

        const makeAttempt = async (id, guess) => {
            const transformedData = {
                guess: guess,
            }

            try {
                const attemptRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/attempts/${id}`, {
                        method: 'POST',
                        headers:
                            {
                                "Content-Type":
                                    'application/json'
                            }
                        ,
                        body: JSON.stringify(transformedData)
                    }
                )
                const attemptResponse = await attemptRes.json();
                // console.log("-> attemptResponse", attemptResponse);

                const {message} = attemptResponse;
                setAttemptResult(message)

                const hintsRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/attempts/${id}`)
                const hintsResponse = await hintsRes.json();
                // console.log("-> hintsResponse", hintsResponse);

                const {attempts_remaining, hints} = hintsResponse;
                setAttemptsRemaining(attempts_remaining)
                setHints(hints)

                // console.log("-> attempts_remaining", attempts_remaining);
                // console.log("-> hints", hints);


            } catch
                (e) {
                console.error("Error while making attempt: ", e.message)
            }
        };

        return (
            <>
                <Header title={`Game #${id}`}/>

                <div className='flex flex-row justify-center mt-10'>
                    <div className='w-2/4'>
                        <HomeButton/>
                    </div>
                </div>

                <div className='flex flex-row justify-center mt-24'>

                    <div className='flex flex-col space-y-10'>
                        <form onSubmit={handleSubmit}>
                            <div className='justify-center'>

                                <Textbox
                                    placeholderText={`Guess a ${spaces} character integer`}
                                    labelText='Guess'
                                    required={true}
                                    onChange={(e) => (guess.current = e.target.value)}
                                    disabled={status === "COMPLETED"}
                                />

                                {/*    show spaces allowed */}
                            </div>

                            <Button
                                className='flex flex-row my-4 justify-center accent-blue-500'
                                buttonText="Submit"
                                type='submit'
                            />
                        </form>

                        <div className='flex flex-row space-x-24'>
                            <div>
                                <p>Attempts remaining:</p>
                                <p>{attemptsRemaining}</p>
                            </div>
                            <div>
                                <p>Last attempt result:</p>
                                <p>{attemptResult}</p>
                            </div>
                        </div>

                        <div className='flex flex-col w-full'>
                            {/*    TODO: SHOW/HIDE PAST GUESSES AND HINTS HISTORY */}
                            <Dropdown hints={hints} />
                        </div>
                    </div>

                </div>
            </>
        );
    }
;

export default Game;

export async function getServerSideProps(context) {

    const {id} = context.query;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/games/${id}`);

    if (!res.ok) {
        // Handle error response
        return {
            notFound: true,
        };
    }
    const data = await res.json();
    return {
        props: {
            data: data,
        },
    };
}
