import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';

const UserCard = ({ user }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`userDetails/${user.id}`, scroll(0, 0))} className="card bg-base-100 cursor-pointer  shadow-sm">
            <figure className="px-10 pt-10">
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
                    <div className='flex gap-2'>
                        {user.tags.map((tag) => (
                            <p className="badge bg-[#CBFADB]">{tag}</p>
                        ))}
                    </div>
                    <p className={`${user.status == 'overdue' ? 'bg-red-400' : 'bg-[#EFAD44]'} badge  text-white ${user.status == 'active' ? 'bg-green-500' : ''}`}>{user.status}</p>
                </div>
                <h2>{user.bio}</h2>
                <p>Preferred: {user.email}</p>
            </div>
        </div>
    );
};

export default UserCard;