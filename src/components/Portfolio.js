import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id="portfolio">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our projects</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
                </div>
    
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    {/* Updated grid configuration to show two columns */}
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* First Box */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                    Metrio
                                </h4>
                                <p className="text-md font-medium leading-6">
                                    Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, and ultimately drives growth and profitability for your business. All data is stored in the cloud and is easily accessible from any device and any location.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link
                                        to="/get-demo"
                                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                    >
                                        Schedule Demo
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
    
                        {/* Second Box */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-6">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                    School Management Portal
                                </h4>
                                <p className="text-md font-medium leading-6">
                                    Our all-encompassing School Management Portal is the only solution needed for any institution. It helps manage administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. 
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link
                                        to="/get-demo"
                                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                    >
                                        Schedule Demo
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Portfolio;