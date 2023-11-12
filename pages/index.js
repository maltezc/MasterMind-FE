import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <div className='title flex py-5 justify-center items-center bg-gray-300'>
                <h1>Mastermind!</h1>
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
