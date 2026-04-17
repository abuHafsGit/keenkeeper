import React from 'react';

const DetailsCard = ({ user }) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-5">
                <img

                    className=' rounded-full border'
                    src={user.picture}
                    alt={user.name}
                    width={100}
                    height={100}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
                <div className=' flex flex-col justify-center items-center space-y-1'>
                    <p className="badge bg-[#EF4444] text-white">{user.status}</p>
                    {user.tags.map((tag,index) => (
                        <p key={ index} className="badge bg-[#CBFADB]">{tag}</p>
                    ))}
                </div>
                <h2>{user.bio}</h2>
                <p>Preferred: {user.email}</p>
            </div>
        </div>
    );
};

export default DetailsCard;