
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className=' max-w-7xl mx-auto flex flex-col justify-center items-center py-10 gap-3 px-4 sm:px-0 h-[60vh] '>

            <h1 className='font-semibold text-[48px] text-[#001931] text-center'>404</h1>
            <h1 className='font-semibold text-[48px] text-[#001931] text-center'>Oops, page not found!</h1>
            <p className=' text-base text-[#627382] text-[20px] text-center'>The page you are looking for is not available.</p>
            <Link href={'/'} className=' text-white font-bold text-base rounded-sm  bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 cursor-pointer'>Go Back!</Link>
        </div>
    );
};

export default Error;