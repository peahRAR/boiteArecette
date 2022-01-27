import React, { Component } from 'react'

const Header = ({pseudo}) => {
    return (
        <header className='bg-gradient-to-br from-red-600  to-orange-400 text-white h-16 flex justify-start items-center'>
            <h1 className='pl-8 text-4xl font-title'>Les recettes du Chef {pseudo}</h1>
        </header>
    )
}

export default Header;