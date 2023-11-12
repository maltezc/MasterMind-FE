import React, {useState} from 'react';
import HintList from "@/components/hints/HintList";

const DropDown = ({hints}) => {
    const [dropdownShowing, setDropdownShowing] = useState(false)

    // const hintsList = hints.map(hint => )

    return (
        <>
            <div className='flex flex-row'>
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    onClick={() => {
                        setDropdownShowing(!dropdownShowing)
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">Guess History

                    <svg className="w-2.5 h-2.5 ms-3"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 10 6">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
            </div>

            <div className='flex flex-row w-full'>
                <div id="dropdown"
                     className={`w-full py-4 px-8 z-10 ${dropdownShowing && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}>
                    <HintList hints={hints}/>
                </div>
            </div>
        </>
    );
};

export default DropDown;
