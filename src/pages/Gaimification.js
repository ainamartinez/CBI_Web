import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import level1img from '../images/lvl1img.svg';
import level2img from '../images/lvl2img.svg';
import level3img from '../images/lvl3img.svg';
import level4img from '../images/lvl4img.svg';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Gaimification = (props) => {

    useDocTitle('CBI | Course Based in Innovation - Demo our products')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [Gaimifications, setGaimifications ] = useState([])
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if(checked) {
            setGaimifications([
                ...Gaimifications, value
            ])
        } else {
            setGaimifications(Gaimifications.filter( (e) => (e !== value )))
        }
       
    }
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
    const levels = [
        {
          id: 1,
          badge: 'Level 1',
          icon: <i className="fas fa-trophy text-yellow-500"></i>,
          rewardName: 'Eco Water Bottle',
          rewardImage: level1img,
          requirements: 'Be between 11-20 in the leaderboard',
          status: 'unlocked', // unlocked, current, or locked
        },
        {
          id: 2,
          badge: 'Level 2',
          icon: <i className="fas fa-medal text-blue-500"></i>,
          rewardName: 'Free Cocktail or Juice',
          rewardImage: level2img,
          requirements: 'Be between 6-10 in the leaderboard',
          status: 'current',
        },
        {
          id: 3,
          badge: 'Level 3',
          icon: <i className="fas fa-leaf text-green-500"></i>,
          rewardName: 'Free breakfast',
          rewardImage: level3img,
          requirements: 'Be in the top 5 in the leaderboard',
          status: 'locked',
        },
        {
          id: 4,
          badge: 'Level 4',
          icon: <i className="fas fa-leaf text-green-500"></i>,
          rewardName: '1000 Points on the chain program',
          rewardImage: level4img,
          requirements: 'Be top 1 in the leaderboard',
          status: 'locked',
        },
      ];
      
    
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)
        fData.append('products', Gaimifications)

        // emailjs.sendForm('service_7uy4ojg', 'template_et9wvdg', e.target, 'user_uE0bSPGbhRTmAF3I2fd3s')
        //   .then((result) => {
        //       console.log(result.text);
        //       Notiflix.Report.success(
        //         'Success',
        //         '"Thanks for sending a message, we\'ll be in touch soon."',
        //         'Okay',
        //         );
        //   }, (error) => {
        //       console.log(error.text);
        //       Notiflix.Report.failure(
        //         'An error occured',
        //         'Please try sending the message again.',
        //         'Okay',
        //         );
        //   });

        axios({
            method: "post",
            url: process.env.REACT_APP_DEMO_REQUEST_API,
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
    }
    return (
        <>
          <div>
            <NavBar />
          </div>
          <div id="gamification" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
            <div className="container mx-auto px-4 lg:px-20">
              <h1 className="text-4xl font-bold text-blue-900 text-center uppercase mb-12">
                Levels & Rewards
              </h1>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
                <div className="space-y-12">
                  {/* Level Cards */}
                  {levels.map((level, index) => (
                    <div
                      key={level.id}
                      className={`relative flex flex-col items-center md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Connector */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-300 z-10"></div>
                      {/* Card */}
                      <div
                        className={`relative w-full md:w-1/2 bg-white shadow-lg rounded-xl p-6 transform ${
                          level.status === 'current'
                            ? 'border-4 border-blue-500 animate-pulse'
                            : level.status === 'unlocked'
                            ? 'opacity-100 border border-gray-300'
                            : 'opacity-50 border border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          {/* Level Badge */}
                          <span className="bg-blue-500 text-white py-1 px-4 rounded-full font-bold">
                            {level.badge}
                          </span>
                          {/* Reward Icon */}
                            {/* {level.rewardImage && (
                              <img
                              src={level.rewardImage}
                              alt={level.rewardName}
                              className="w-12 h-12 rounded-full"
                              />
                            )} */}
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              level.status === 'current' ? 'animate-bounce' : ''
                            }`}
                            style={{
                              background: level.status === 'locked' ? '#ccc' : '#85c4ff',
                            }}
                          >
                            {level.icon}
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-4">
                            <div className="w-3/4 pr-2">
                              {/* Middle Section */}
                              <h2 className="text-xl font-bold text-blue-900 mb-2">{level.rewardName}</h2>
                              <p className="text-gray-700 mb-4">{level.requirements}</p>
                              {/* Unlock Status */}
                              <span
                                className={`text-sm font-bold py-1 px-3 rounded-lg ${
                                level.status === 'unlocked'
                                  ? 'text-green-700 bg-green-200'
                                  : level.status === 'locked'
                                  ? 'text-gray-700 bg-gray-200'
                                  : 'text-blue-700 bg-blue-200'
                                }`}
                              >
                              {level.status === 'unlocked'
                                ? '✔ Unlocked'
                                : level.status === 'locked'
                                ? '🔒 Locked'
                                : 'Current Level'}
                              </span>
                            </div>
                            
                            <div className="w-full pl-2 flex justify-end items-end">
                              {/* Right Part */}
                              {/* Reward Icon */}
                              {level.rewardImage && (
                                <img
                                src={level.rewardImage}
                                alt={level.rewardName}
                                className="w-20 h-20"
                                />
                              )}
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
      
}

export default Gaimification;