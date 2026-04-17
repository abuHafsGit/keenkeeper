import React from 'react';

const HeroCard = () => {
    return (
        <div className=' bg-[#F8FAFC] flex flex-col py-3 w-full p-4  rounded-md space-y-4'>
            <div className='grid grid-cols-4 gap-3 text-center'>
                <div className=' bg-[#F8FAFC] p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center cursor-pointer'>
                    <div className=' font-semibold text-3xl text-[##244D3F]'>15</div>
                    <div className=' text-gray-400 text-[14px] md:text-base'>Total Friends</div>
                </div>
                <div className=' bg-white p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center cursor-pointer'>
                    <div className=' font-semibold text-3xl text-[##244D3F]'>3</div>
                    <div className=' text-gray-400 text-[14px] md:text-base'>On Track</div>
                </div>
                <div className=' bg-white p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center  cursor-pointer'>
                    <div className=' font-semibold text-3xl text-[##244D3F]'>6</div>
                    <div className=' text-gray-400 text-[14px] md:text-base'>Need Attention</div>
                </div>
                <div className=' bg-white p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center  cursor-pointer'>
                    <div className=' font-semibold text-3xl text-[##244D3F]'>12</div>
                    <div className=' text-gray-400 p-1 text-[14px] md:text-base'>Interactions This Month</div>
                </div>

            </div>
        </div>
    );
};

export default HeroCard;