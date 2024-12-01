import React from 'react';
import img from '../images/stats.svg'; 
import img2 from '../images/advice.svg';
import img3 from '../images/awards.svg';

const Explore = () => {

    return (
        <div id="explore" className="bg-gray-100 py-12">
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Explore</h2>
    
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900"></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                    Find out how you can become water responsible!
                </h2>
            </div>
    
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                        <div className="m-2 text-justify text-sm ">
                            <img
                                alt="card img"
                                className="w-1/2 mx-auto rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src={img}
                            />
                            <h2 className="font-semibold my-4 text-2xl text-center">See your stats</h2>
                            <p className="text-center font-medium">View your consumption data during a timeline</p>
                        </div>
                    </div>
    
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                        <div className="m-2 text-justify text-sm">
                            <img
                                alt="card img"
                                className="w-1/2 mx-auto rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src={img2}
                            />
                            <h2 className="font-semibold my-4 text-2xl text-center">Want some advice?</h2>
                            <p className="text-center font-medium">
                                Want to improve your water consumption? Here you will find some tips.
                            </p>
                        </div>
                    </div>
    
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-5 group">
                        <div className="m-2 text-justify text-sm">
                            <img
                                alt="card img"
                                className="w-1/2 mx-auto rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src={img3}
                            />
                            <h2 className="font-semibold my-4 text-2xl text-center">Rewards</h2>
                            <p className="text-center font-medium">
                                Discounts? Free breakfast at our hotels? Spa day? By having responsible water consumption, you can access these rewards and many more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Explore;