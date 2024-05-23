import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarDays, faEnvelope, faItalic, faLocationDot, faPhoneVolume, faUser } from '@fortawesome/free-solid-svg-icons';


const ClassView = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className=" mr-7 pr-10 text-left lg:ml-10 my-10 rounded-lg border border-black-100 py-6 px-6
                w-full 
              xl:w-1/2 xl:px-6
              lg:w-2/5 lg:px-6 
              md:px-10

             ">
                    <h1 className="text-xl mb-10 font-semibold ">Personal Details :</h1>
                    <div>
                        <div className="mb-4">

                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faUser} />
                                Name</h3>
                            <p className='pl-7'>Bruce Willis</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faBuilding} />Department</h3>
                            <p className='pl-7'>Computer Science</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faPhoneVolume}/>Mobile</h3>
                            <p className='pl-7'>+91 89657 48512</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faEnvelope} />Email</h3>
                            <p className='pl-7'>joe@gmail.com</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faUser} />Gender</h3>
                            <p className='pl-7'>Male</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faCalendarDays}/>Date of Birth</h3>
                            <p className='pl-7'>11 May 2024</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4'icon={faItalic} />Language</h3>
                            <p className='pl-7'>English, French, Bangla</p>
                        </div>
                        <div>
                            <h3 className="font-semibold"><FontAwesomeIcon className='pr-4' icon={faLocationDot} />Address</h3>
                            <p className='pl-7'>480, Eastern Avenue, New York</p>
                        </div>
                    </div>
                </div>
                <div className="w-full  
              xl:w-2/3 xl:px-6
              lg:w-2/3 lg:px-6 
               md:pl-10 md:px-10

               text-left my-10 mr-10 rounded-md border border-black-100 py-6 px-6">
                    <h1 className="text-xl mb-10 font-semibold ">About Me</h1>
                    <div>
                        <h2 className="text-lg mb-4 font-semibold">Hello, I am Daisy Parks</h2>
                        <p className="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni possimus culpa dolore minus quo error sequi ex cupiditate! Fuga architecto fugiat aliquam ipsa quas cumque sed quam quisquam dolor. Pariatur, eos quas quod corporis perspiciatis amet! Alias eligendi, aperiam voluptatibus harum expedita itaque animi. Sed vel quia voluptatibus minus?</p>
                        <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eos optio aut hic ratione beatae. Quam quo dignissimos alias deleniti!</p>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 ">Education</h3>  
                            <div className="mb-2">
                                <h6 className="font-semibold">2008 - 2009</h6>
                                <p>Higher Secondary Schooling at XYZ School of Higher</p>
                            </div>
                            <div className="mb-2">
                                <h6 className="font-semibold">2011 - 2012</h6>
                                <p>Higher Secondary Schooling at XYZ School of Higher Secondary Education, Mumbai.</p>
                            </div>
                            <div className="mb-2">
                                <h6 className="font-semibold">2012 - 2015</h6>
                                <p>Bachelor of Science at ABC College of Art and Science, Chennai.</p>
                            </div>
                            <div className="mb-2">
                                <h6 className="font-semibold">2015 - 2017</h6>
                                <p>Master of Science at CDM College of Engineering and Technology, Pune.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassView;