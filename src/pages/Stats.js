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
    /* 
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type':  'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput()
            //handle success
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            
        });
    } */
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Your stats</h1>
                        </div>

                        <div>
                            <div className='container mx-auto px-4 py-8'>
                                <div className="relative">
                                    <div className="absolute top-0 left-0 w-[800px] h-[370px] bg-gray-100 rounded-lg shadow-lg z-0"></div>' 
                                        <iframe 
                                            src="https://grafana.cbiweb.duckdns.org/d-solo/ce4gdqbj0qpkwe/room?orgId=1&from=1717538400000&to=1717624799000&timezone=browser&theme=light&panelId=2&__feature.dashboardSceneSolo"
                                            width="800"
                                            height="350"
                                            frameborder="0"
                                            className="relative z-10"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <a href="https://grafana.cbiweb.duckdns.org/goto/_xZWrV4Ng?orgId=1" target="_blank" rel="noopener noreferrer">
                                <button type="button" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                        focus:outline-none focus:shadow-outline">
                                    See more
                                </button>
                            </a>
                        </div>
                    
                        </div>
                            <div className="w-full lg:w-1/3 bg-blue-900 p-4 rounded-lg mt-4 lg:mt-0 lg:ml-4">
                                <p className="text-white text-center">This is a little blue square with some text.</p>
                                <img src={img} alt="Water consumption" className="w-full h-auto rounded-lg shadow-lg" />
                            </div>
                        </div>
            <Footer />
        </>
    )
}

export default Stats;