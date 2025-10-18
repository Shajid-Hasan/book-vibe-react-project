import React from 'react';
import Dating from '../../assets/dating.png'
const Banner = () => {
    return (
        <div className='bg-[#1313130d] my-8 p-10 rounded-2xl'>
            <div className='flex justify-center gap-5'>
                <div className='mt-20'>
                    <h1 className='text-6xl font-semibold'>Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success bg-[#23be0a] mt-10 px-10 text-white">Success</button>
                </div>
                <div>
                    <img src={Dating} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;