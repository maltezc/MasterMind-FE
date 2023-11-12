import {Inter} from 'next/font/google'
import GameList from "@/components/games/GameList";
import Button from "@/components/ui/Button";
import {useRouter} from 'next/router'

const inter = Inter({subsets: ['latin']})

export default function Home(props) {
    const router = useRouter();

    const {games} = props.data

    const activeGames = games.filter(game => game.status === "ACTIVE")
    const completedGames = games.filter(game => game.status === "COMPLETED")


    const handleLoginClick = (e) => {
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        router.push('/game/new-game');
        // console.log(localStorage.getItem("redirectAfterLogin"))
    }

    return (
        <>
            <div className='title flex py-5 justify-center items-center bg-gray-800 text-3xl'>
                <h1>Mastermind!</h1>
            </div>

            <div className='mt-20 flex flex-row mx-28'>
                <div className='w-3/4'>
                    {/*<div className='flex flex-row justify-center'>*/}
                    <Button
                        className='flex flex-row my-4 accent-blue-500 ml-40'
                        onClick={handleLoginClick}
                        buttonText="New Game"
                        type='button'
                    >
                    </Button>
                    {/*</div>*/}
                </div>
            </div>

            <div className='mt-16'>
                <p className='text-center'>Game History</p>
                <div className='flex flex-row mt-12 mx-20 justify-center space-x-24'>

                    <div className='flex flex-col'>
                        <p>Active Games</p>
                        <div className='mt-8'>
                            <GameList games={activeGames}/>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <p>Completed Games</p>
                        <div className='mt-8'>
                            <GameList games={completedGames}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {


    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/games`);

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
