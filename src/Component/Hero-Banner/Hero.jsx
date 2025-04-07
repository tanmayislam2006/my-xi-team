import React from 'react';
import Logo from "../../assets/football-log.jpeg"

const Hero = () => {
    return (
        <div className='bg-hero-bg py-10 px-3 rounded-lg max-w-6xl mx-auto my-5'>
            <div className="bg-transparent flex justify-center"><img className='rounded-full' src={Logo} alt="" /></div>
            <div className="my-4">
                <h1 className="text-2xl  font-bold text-center">Assemble Your Ultimate Dream Football Team</h1>
                <p className="text-gray-500 text-center text-lg my-4">Beyond Boundaries Beyond Limits</p>
                <div className="my-5 mx-auto flex justify-center border-2 border-main-color p-1 rounded-lg max-w-max">
                    <button className='bg-main-color font-bold px-4 py-2 rounded-lg '>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;