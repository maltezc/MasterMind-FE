import React from 'react';
import Link from "next/link";

const HomeButton = () => {

    const homeLink = `/`;

    return (
        <>
            <Link
                href={homeLink}
                // className="flex flex-row my-4 justify-center accent-blue-500">
                className="text-xl underline hover:text-blue-500 hover:underline focus:outline-none">
                Home
                {/*{listing.title}*/}
            </Link>
        </>
    );
};

export default HomeButton;
