const HorizontalRadio = () => {

    return (

        <>
            <h3 className="mb-4 text-gray-900 dark:text-gray-400">Difficulty</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="horizontal-list-radio-license"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Easy
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="horizontal-list-radio-id"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="horizontal-list-radio-millitary"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hard</label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="horizontal-list-radio-passport"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Legendary</label>

                    </div>
                </li>
            </ul>
        </>


    );
};

export default HorizontalRadio;


/*
    <div className="flex items-center justify-center w-screen h-screen">

        {/!*Component Start *!/}
        <form className="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
            <div>
                <input className="hidden" id="radio_1" type="radio" name="radio" checked>
                    <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
                           htmlFor="radio_1">
                        <span className="text-xs font-semibold uppercase">Small</span>
                        <span className="text-xl font-bold mt-2">$10/mo</span>
                        <ul className="text-sm mt-2">
                            <li>Thing 1</li>
                            <li>Thing 2</li>
                        </ul>
                    </label>
                </input>
            </div>

            <div>
                <input className="hidden" id="radio_2" type="radio" name="radio">
                    <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
                           htmlFor="radio_2">
                        <span className="text-xs font-semibold uppercase">Medium</span>
                        <span className="text-xl font-bold mt-2">$40/mo</span>
                        <ul className="text-sm mt-2">
                            <li>Thing 1</li>
                            <li>Thing 2</li>
                        </ul>
                    </label>
                </input>
            </div>
            <div>
                <input className="hidden" id="radio_3" type="radio" name="radio">
                    <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
                           htmlFor="radio_3">
                        <span className="text-xs font-semibold uppercase">Big</span>
                        <span className="text-xl font-bold mt-2">$100/mo</span>
                        <ul className="text-sm mt-2">
                            <li>Thing 1</li>
                            <li>Thing 2</li>
                        </ul>
                    </label>
                </input>
            </div>
        </form>
        {/!*Component End *!/}

    </div>
*/