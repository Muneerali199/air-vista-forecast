
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface Location {
  name: string;
  coordinates: { lat: number; lng: number };
}

interface AirQualityChartProps {
  location: Location;
}

export const AirQualityChart = ({ location }: AirQualityChartProps) => {
  const data = [
    { time: '00:00', aqi: 65, pm25: 22, pm10: 35, o3: 45 },
    { time: '03:00', aqi: 58, pm25: 19, pm10: 32, o3: 38 },
    { time: '06:00', aqi: 72, pm25: 28, pm10: 42, o3: 52 },
    { time: '09:00', aqi: 85, pm25: 35, pm10: 48, o3: 65 },
    { time: '12:00', aqi: 92, pm25: 38, pm10: 52, o3: 72 },
    { time: '15:00', aqi: 88, pm25: 32, pm10: 45, o3: 68 },
    { time: '18:00', aqi: 75, pm25: 25, pm10: 38, o3: 55 },
    { time: '21:00', aqi: 68, pm25: 22, pm10: 35, o3: 48 },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
      <h3 className="text-2xl font-bold text-white mb-6">24-Hour Trend</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="aqiGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="pm25Gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="time" 
              stroke="#9ca3af" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9ca3af" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Area
              type="monotone"
              dataKey="aqi"
              stroke="#3b82f6"
              fill="url(#aqiGradient)"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="pm25"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#10b981', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-slate-300 text-sm">AQI</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
          <span className="text-slate-300 text-sm">PM2.5</span>
        </div>
      </div>
    </Card>
  );
};
