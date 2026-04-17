
import { useAppContext } from '../context/AppContext';
import Loading from './Loading';
import UserCard from './UserCard';


const Friends = () => {
    const { users, isLoding } = useAppContext()
    return (
        <div className='container mx-auto space-y-4 px-4 bg-[#F8FAFC]'>
            <div>
                <h1 className=' md:ml-2 text-2xl font-semibold'>Frindes</h1>
            </div>
            {
                isLoding ? <Loading /> : <div className='  grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-2 lg:gap-10 px-4 mb-4'>
                    {
                        users.map((user) => (
                            <div key={user.id} >
                                <UserCard user={user} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Friends;