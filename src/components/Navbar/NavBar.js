import React, { useState, useEffect } from 'react'; // special libraries to handle state and side effects
import NavLinks from '../Navbar/NavLinks'; // import the NavLinks component, likely contains the navigation links
import { HashLink } from 'react-router-hash-link'; // component for creating linkts that scroll smoothly to different sections of the page
import waterConsumptionImg from '../../images/logosComb.png'; // Import the image

const NavBar = () => { // dfeine the NavBar component
    const [top, setTop] = useState(!window.scrollY); //Top us a state variable that checks if the user has scrolled to the top of the page
    const [isOpen, setisOpen] = React.useState(false); //is open is a state variable that checks if the mobile navigation menu is open or closed
    function handleClick() { //handleClick is a function that toggles the mobile navigation menu
        setisOpen(!isOpen);
    }


    useEffect(() => { //useEffect is a hook that runs side effects in function components
      const scrollHandler = () => { //scrollHandler is a function that checks if the user has scrolled past the top of the page
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler); //add an event listener to the window object that listens for scroll events
      return () => window.removeEventListener('scroll', scrollHandler); //remove the event listener when the component is unmounted
    }, [top]);

    return (
        /*
        <nav> is a semantic HTML element that represents the navigation section of a page
        <HashLink> is a component that creates links that scroll smoothly to different sections of the page
        className is a prop that assigns a class to an element
        <button> is a semantic HTML element that represents a clickable button
        <svg> is a component that renders an SVG image
        <NavLinks> is a component that likely contains the navigation links
        */
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
                {/* <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">LOGO</h1></HashLink>
                    
                </div> */}
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero">
                        <img src={waterConsumptionImg} alt="Logo" className="h-16 w-auto" />
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
