import React from 'react';

const HintItem = (props) => {

    const {hint, guess} = props;


    return (
        <div className='flex flex-row space-x-10 w-full'>
            <div className='flex flex-col'>
                <li>Guess: {guess}</li>
            </div>
            <div className='flex flex-col'>
                <li>Hint: {hint}</li>
            </div>
        </div>
    );
};

export default HintItem;
