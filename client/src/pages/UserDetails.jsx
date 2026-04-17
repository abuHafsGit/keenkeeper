
import DetailsCard from '../components/DetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { useAppContext } from '../context/AppContext';
import toast, { Toaster } from 'react-hot-toast';
import { Archive, Bell, ClipboardType, Delete, MessageCircleMore, PhoneCall, SnowflakeIcon, Video } from 'lucide-react';


const UserDetails = () => {
    const { id } = useParams();
    const users = useLoaderData()
    const expectedUser = users.find((user) => user.id == id)
    console.log(id, users, expectedUser)
    const { timeLinens, call, setCall, text, setText, video, setVideo } = useAppContext()

    const handleCall = () => {
        setCall([...call, expectedUser])
        toast.success(`Call with ${expectedUser.name}`)

    }
    const handleText = () => {
        setText([...text, expectedUser])
        toast.success(`Text with ${expectedUser.name}`)
    }
    const handleVideo = () => {
        setVideo([...video, expectedUser])
        toast.success(`Video with ${expectedUser.name}`)
    }
    console.log('timeLinens', timeLinens)
    return (
        <div className=' container mx-auto my-5 lg:my-33'>

            <div className=' flex flex-col md:flex-row  gap-4 max-w-7xl mx-auto '>
                <div className=' lg:w-[33vw] w-full space-y-4 px-4'>
                    <div>
                        <DetailsCard user={expectedUser} />

                    </div>
                    <div className=' bg-white py-3 flex justify-center items-center gap-3 border border-gray-200 shadow'>
                        {/* <House /> */}
                        <p className=' flex gap-2'><Bell /> Snooze 2 weeks</p>
                    </div>
                    <div className=' bg-white py-3 flex justify-center items-center gap-3 border border-gray-200 shadow'>
                        {/* <House /> */}
                        <p className=' flex gap-2'><Archive /> Archive</p>
                    </div>
                    <div className=' bg-white py-3 flex justify-center items-center gap-3 border border-gray-200 shadow'>
                        {/* <House /> */}
                        <p className=' text-red-500 flex gap-2'><Delete /> Delete</p>
                    </div>
                </div>
                <div className='w-full lg:w-[66vw] space-y-4 px-4  '>
                    <div className=' grid grid-cols-3  gap-4 text-center shadow'>
                        <div className=' bg-[#F8FAFC] p-4 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center'>
                            <p>60</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=' bg-[#F8FAFC] p-4 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center'>
                            <p>62</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=' bg-[#F8FAFC] p-4 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center'>
                            <p>Feb 27, 2026</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>

                    </div>
                    <div className=' bg-white p-4 shadow '>
                        <div className=' flex justify-between'>
                            <p>Relationship Goal</p>
                            <p className='bg-[#F8FAFC] border border-gray-300 py-1 px-2 btn'>edit</p>
                        </div>
                        <div>Connect every 30 days</div>
                    </div>
                    <div className=' bg-white flex flex-col py-3 w-full p-4 shadow rounded-md space-y-4'>
                        <div>Quick Check-In</div>
                        <div className='grid grid-cols-3 gap-3 text-center'>
                            <div onClick={handleCall} className=' bg-[#F8FAFC] p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center cursor-pointer'>
                                <div><PhoneCall /></div>
                                <div>call</div>
                            </div>
                            <div onClick={handleText} className=' bg-[#F8FAFC] p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center cursor-pointer'>
                                <div><MessageCircleMore /></div>
                                <div>text</div>
                            </div>
                            <div onClick={handleVideo} className=' bg-[#F8FAFC] p-10 border border-gray-300 rounded-md shadow flex flex-col justify-center items-center  cursor-pointer'>
                                <div><Video /></div>
                                <div>video</div>
                            </div>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserDetails;