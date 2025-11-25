'use client'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 590, pv: 800, amt: 1400 },
  { name: 'Feb', uv: 868, pv: 967, amt: 1506 },
  { name: 'Mar', uv: 1397, pv: 1098, amt: 989 },
  { name: 'Apr', uv: 1480, pv: 1200, amt: 1228 },
  { name: 'May', uv: 1520, pv: 1108, amt: 1100 },
  { name: 'Jun', uv: 1400, pv: 680, amt: 1700 },
];

const TotalRevenueCard = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Total Revenue</h2>
          <p className="text-gray-600 text-sm mt-1">Monthly revenue analytics</p>
        </div>
      </div>

      <div className="w-full h-[220px] sm:h-[250px] md:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              scale="band"
              tick={{ fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              width={35}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                fontSize: '12px'
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
            <Area type="monotone" dataKey="amt" fill="#8884d8" fillOpacity={0.6} stroke="#8884d8" strokeWidth={2} />
            <Bar dataKey="pv" barSize={16} fill="#413ea0" radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" strokeWidth={2} dot={{ fill: '#ff7300', r: 3 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-600">UV</p>
            <p className="text-sm font-bold text-blue-900">6,855</p>
          </div>
          <div className="text-center p-2 bg-purple-50 rounded-lg">
            <p className="text-xs text-purple-600">PV</p>
            <p className="text-sm font-bold text-purple-900">5,853</p>
          </div>
          <div className="text-center p-2 bg-green-50 rounded-lg">
            <p className="text-xs text-green-600">Amount</p>
            <p className="text-sm font-bold text-green-900">7,923</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueCard;