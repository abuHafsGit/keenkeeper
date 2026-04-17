import { Home } from "lucide-react";
import TimeLineCard from "../components/TimeLineCard";
import { useAppContext } from "../context/AppContext";


const TimeLinePage = () => {
    const { timeLinens, call, text, video } = useAppContext()
    console.log(timeLinens.length)
    return (
        <div className='max-w-7xl mx-auto space-y-4 my-10 px-4'>
            <h1>Timeline</h1>
            <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Filter Timeline</option>
                <option>Text</option>
                <option>Video</option>
                <option>MeetUp</option>
            </select>
            <div className=" flex flex-col gap-3">
                {timeLinens.map((timeLinen) => (
                    <div>
                        <TimeLineCard key={timeLinen.id} timeLinen={timeLinen} />
                    </div>
                ))}
            </div>
            <div className=" flex flex-col gap-3">
                {text.map((c) => (
                    <div>
                        <TimeLineCard key={c.id} timeLinen={c} props="Meetup" />
                    </div>
                ))}
            </div>
            <div className=" flex flex-col gap-3">
                {video.map((c) => (
                    <div>
                        <TimeLineCard key={c.id} timeLinen={c} props="Text" />
                    </div>
                ))}
            </div>
            <div className=" flex flex-col gap-3">
                {call.map((c) => (
                    <div>
                        <TimeLineCard key={c.id} timeLinen={c} props="Video" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLinePage;