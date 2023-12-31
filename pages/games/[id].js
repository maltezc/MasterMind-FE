import React, {useRef, useState} from 'react';
import Header from "@/components/layout/header";
import Textbox from "@/components/ui/Textbox";
import Button from "@/components/ui/Button";
import HomeButton from "@/components/ui/Buttons/HomeButton";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import useSWR from 'swr';

const Game = (props) => {
        const guess = useRef("");
        const [attemptResult, setAttemptResult] = useState("");

        const fetcher = (url) => fetch(url).then((res) => res.json());
        const url = `http://127.0.0.1:5000/api/attempts/${props.data.game.id}`
        const {data: hintData, error, isLoading, mutate} = useSWR(url, fetcher);


        const {game} = props.data
        const {id, attempts, status, spaces, player1_name, player2_name} = game

        const handleSubmit = async (e) => {
            e.preventDefault();
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

                const {message} = attemptResponse;
                setAttemptResult(message)

                await mutate()
            } catch
                (e) {
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

                        {hintData && hintData.attempts_remaining > 0 ?
                            <form onSubmit={handleSubmit}>
                                <div className='justify-center'>

                                    <Textbox
                                        placeholderText={`Guess a ${spaces} character positive integer`}
                                        labelText='Guess'
                                        required={true}
                                        onChange={(e) => (guess.current = e.target.value)}
                                        disabled={status === "COMPLETED"}
                                    />
                                </div>

                                <Button
                                    className='flex flex-row my-4 justify-center accent-blue-500'
                                    buttonText="Submit"
                                    type='submit'
                                />
                            </form> :
                            <div className='text-center text-2xl'>
                                <p>Game Completed</p>
                            </div>
                        }

                        <div className='flex flex-row space-x-24'>
                            <div>
                                <p>Attempts remaining:</p>
                                {hintData && <p>{hintData.attempts_remaining}</p>}
                            </div>
                            <div>
                                <p>Last attempt result:</p>
                                <p>{attemptResult}</p>
                            </div>
                        </div>

                        {hintData ?
                            <div className='flex flex-col w-full'>
                                <Dropdown hints={hintData}/>
                            </div> :
                            <div>Loading</div>
                        }
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
