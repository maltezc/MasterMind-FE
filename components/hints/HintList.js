import React from 'react';
import HintItem from "@/components/hints/HintItem";

const HintList = (props) => {

    const hintList = props.hints

    return (
        <>
            <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton">

                {hintList.hints.map((hint, i) => (
                    <HintItem
                        key={i}
                        guess={hint[0]}
                        hint={hint[1]}
                    />
                ))}
            </ul>
        </>
    );
};


export default HintList;
