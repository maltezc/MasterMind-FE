import React from 'react';
import Header from "@/components/layout/header";

const Game = (props) => {

    console.log("-> props", props);
    const {game} = props.data
    console.log("-> games", game);

    const {id, attempts, status, player1_name, player2_name} = game

    return (
        <>
            <Header title={`Game #${id}`}/>
            <div className='flex flex-row justify-center mt-24'>
                <div className='justify-center w-1/2'>
                    <p>test</p>

                    {/*    TODO: GUESS INPUT - greyed out if status == completed */}
                    {/*    show spaces allowed */}


                </div>

                <div>
                    {/*    TODO: MOST recent guess status: incorrect, correct, blank */}
                </div>

                <div>
                    {/*    TODO: SHOW/HIDE PAST GUESSES AND HINTS HISTORY */}
                </div>

            </div>
            {/*<Header title={`Game #${id}`} />*/}
        </>
    );
};

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
