import React from 'react';

const TextBox = ( { labelText, placeholderText, type='text' , onChange} ) => {
    return (
        <>
            <div>
                <label className="text-gray-600 dark:text-gray-400">
                    {labelText}
                </label>
                <input
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                    type={type}
                    placeholder={placeholderText}
                    onChange={onChange}
                />
            </div>
        </>
    )
};

export default TextBox;
