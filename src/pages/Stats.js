import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import img from '../images/Water-consumption.png';

const Stats = () => {
    useDocTitle('CBI | Course Based in Innovation - Stats')
            return (
            <>
                <div>
                    <NavBar />
                </div>
                <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                        <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
                            {/* White Square */}
                            <div className="w-full lg:w-2/3 bg-white p-8 my-4 md:px-12 rounded-2xl shadow-2xl flex-grow">
                                <div className="flex">
                                    <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Your stats</h1>
                                </div>
                                <div className="container mx-auto px-4 py-8">
                                    <div className="relative">
                                        <div className="absolute top-0 left-0 w-full h-[370px] bg-gray-100 rounded-lg shadow-lg z-0"></div>
                                        <iframe
                                            src="https://grafana.cbiweb.duckdns.org/d-solo/ce4gdqbj0qpkwe/room?orgId=1&from=1717538400000&to=1717624799000&timezone=browser&theme=light&panelId=2&__feature.dashboardSceneSolo"
                                            width="100%"
                                            height="350"
                                            frameBorder="0"
                                            className="relative z-10"
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="my-2 w-1/2">
                                    <a
                                        href="https://grafana.cbiweb.duckdns.org/goto/_xZWrV4Ng?orgId=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button
                                            type="button"
                                            id="submitBtn"
                                            className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                        >
                                            See more
                                        </button>
                                    </a>
                                </div>
                            </div>
        
                            {/* Blue Square */}
                            <div className="w-full lg:w-1/3 bg-blue-900 p-8 rounded-2xl shadow-2xl flex-grow flex flex-col justify-center items-center min-h-full" >
                            
                                <p className="font-bold text-left lg:text-left text-white uppercase text-4xl">Ranking top users:</p>
                                {/* <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '56.25%', // 16:9 aspect ratio
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    }}
                                > */}
                                    <div className="container mx-auto px-4 py-8">
                                        <div className="relative">
                                            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-lg shadow-lg z-0"></div>
                                            <iframe
                                                src="https://grafana.cbiweb.duckdns.org/d-solo/ce4gdqbj0qpkwe/room?orgId=1&from=1733200628204&to=1733222228204&timezone=browser&showCategory=Panel%20options&theme=light&panelId=3&__feature.dashboardSceneSolo"
                                                width="100%"
                                                height="490"
                                                frameBorder="0"
                                                className="relative z-10"
                                            ></iframe>
                                    </div>
                                    
                                {/* </div> */}
                                    {/* <iframe
                                        src="https://grafana.cbiweb.duckdns.org/d-solo/ce4gdqbj0qpkwe/room?orgId=1&from=1733200628204&to=1733222228204&timezone=browser&showCategory=Panel%20options&theme=light&panelId=3&__feature.dashboardSceneSolo"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                        }}
                                    ></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
        
        
        
        
        
}

export default Stats;