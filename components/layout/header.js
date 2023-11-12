import React from 'react';

const Header = ({title}) => {

    return (
        <div className='title flex py-5 justify-center items-center bg-gray-800 text-3xl'>
            <p>{title}</p>
        </div>

    );
};

export default Header;
