import React from 'react';
import Button from "@/components/ui/Button";
import {useRouter} from "next/router";

const HomeButton = () => {
    const router = useRouter();

    const handleLoginClick = async (e) => {
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        await router.push(`/`);
    }

    return (
        <>

            <Button
                className='flex flex-row my-4 accent-blue-500 ml-40'
                onClick={handleLoginClick}
                buttonText="Home"
                type='button'
            >
            </Button>

        </>
    );
};

export default HomeButton;
