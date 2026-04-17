import TimeLineCard from "../components/TimeLineCard";
import { useAppContext } from "../context/AppContext";


const TimeLinePage = () => {
    const { timeLinens } = useAppContext()
    console.log(timeLinens.length)
    return (
        <div className='max-w-7xl mx-auto space-y-4 my-10 px-4'>
            <h1>Timeline</h1>
            <button className=' btn'>Filter timeline</button>
            <div className=" flex flex-col gap-3">
                {timeLinens?.map((timeLinen) => (
                    <div>
                        <TimeLineCard key={timeLinen.id} timeLinen={timeLinen} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLinePage;