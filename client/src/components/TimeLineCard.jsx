
import React from 'react';

const TimeLineCard = ({ timeLinen }) => {
    const year = new Date().getFullYear()
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const fullDate = year + "/" + day + "/" + month
    return (
        <div className=' max-w-7xl mx-auto bg-white border border-gray-200 rounded-md shadow flex gap-2  items-center py-3 lg:px-10  px-4 '>
            <div>
                home icon
            </div>
            <div className=' flex flex-col'>
                <div className=' flex gap-1'>
                    <p className=' font-bold'>meetup</p>
                    <p className=' text-gray-400'>{timeLinen.name}</p>
                </div>
                <p className=' text-gray-400'>{fullDate}</p>
            </div>
        </div>
    );
};

export default TimeLineCard;