import React from 'react'; //import the react module
import { HashLink } from 'react-router-hash-link'; //import the HashLink component from the react-router-hash-link module

const NavLinks = () => { //Component definition
    return (
        // Here defines the navigation links we find in the upper right corner of the page
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About us
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#explore">
                Explore
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/stats#stats">
                Stats
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact us
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/gamification#demo">
                Gamification
            </HashLink>
        </>
    )
}

export default NavLinks;
