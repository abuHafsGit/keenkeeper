import { useAppContext } from "../context/AppContext";

import { PieChart, Tooltip, Legend, Pie } from 'recharts'
const StatusPage = () => {
    const { call, text, video, } = useAppContext()
    console.log(call, text, video)
    const data = [
        { name: 'call', value: call.length, fill: '#7E35E1' },
        { name: 'text', value: text.length, fill: '#244D3F' },
        { name: 'video', value: video.length, fill: '#37A163' },

    ];

    return (
        <div className='max-w-7xl mx-auto  my-10 '>
            <div>
                <p className='text-3xl text-center md:text-start md:text-5xl font-bold'>Friendship Analytics</p>
            </div>
            <div className=' bg-white p-4'>
                <div>
                    <p className=' text-base font-medium text-center md:text-start'>By Interaction Type</p>
                </div>
                <div className=' flex justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default StatusPage;