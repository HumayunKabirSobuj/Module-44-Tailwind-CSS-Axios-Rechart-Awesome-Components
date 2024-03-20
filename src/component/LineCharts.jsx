
import { LineChart, Line } from 'recharts';
const LineCharts = () => {

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },{ name: 'Page A', uv: 480, pv: 2400, amt: 2400 },{ name: 'Page A', uv: 600, pv: 2400, amt: 2400 },{ name: 'Page A', uv: 300, pv: 2400, amt: 2400 },{ name: 'Page A', uv: 500, pv: 2400, amt: 2400 }]



    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv"  />
            </LineChart>
        </div>
    );
};

export default LineCharts;