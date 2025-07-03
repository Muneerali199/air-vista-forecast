
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TrendingUp, TrendingDown, Thermometer, Wind, Cloud } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Forecast = () => {
  const [selectedLocation] = useState({
    name: "New York City",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  });

  const hourlyData = [
    { time: '00:00', aqi: 65, pm25: 22, pm10: 35, o3: 45, temp: 18, humidity: 70, wind: 8 },
    { time: '03:00', aqi: 58, pm25: 19, pm10: 32, o3: 38, temp: 16, humidity: 75, wind: 6 },
    { time: '06:00', aqi: 72, pm25: 28, pm10: 42, o3: 52, temp: 17, humidity: 68, wind: 10 },
    { time: '09:00', aqi: 85, pm25: 35, pm10: 48, o3: 65, temp: 21, humidity: 60, wind: 12 },
    { time: '12:00', aqi: 92, pm25: 38, pm10: 52, o3: 72, temp: 25, humidity: 55, wind: 15 },
    { time: '15:00', aqi: 88, pm25: 32, pm10: 45, o3: 68, temp: 27, humidity: 50, wind: 18 },
    { time: '18:00', aqi: 75, pm25: 25, pm10: 38, o3: 55, temp: 24, humidity: 58, wind: 14 },
    { time: '21:00', aqi: 68, pm25: 22, pm10: 35, o3: 48, temp: 20, humidity: 65, wind: 10 },
  ];

  const weeklyForecast = [
    { day: "Monday", date: "Dec 9", aqi: 85, status: "Moderate", temp: { min: 18, max: 25 }, wind: 12, humidity: 65, mainPollutant: "PM2.5", trend: "stable" },
    { day: "Tuesday", date: "Dec 10", aqi: 72, status: "Moderate", temp: { min: 16, max: 23 }, wind: 15, humidity: 58, mainPollutant: "O₃", trend: "down" },
    { day: "Wednesday", date: "Dec 11", aqi: 58, status: "Moderate", temp: { min: 14, max: 21 }, wind: 18, humidity: 52, mainPollutant: "PM10", trend: "down" },
    { day: "Thursday", date: "Dec 12", aqi: 45, status: "Good", temp: { min: 13, max: 19 }, wind: 20, humidity: 48, mainPollutant: "NO₂", trend: "down" },
    { day: "Friday", date: "Dec 13", aqi: 62, status: "Moderate", temp: { min: 15, max: 22 }, wind: 16, humidity: 55, mainPollutant: "PM2.5", trend: "up" },
    { day: "Saturday", date: "Dec 14", aqi: 68, status: "Moderate", temp: { min: 17, max: 24 }, wind: 14, humidity: 60, mainPollutant: "O₃", trend: "up" },
    { day: "Sunday", date: "Dec 15", aqi: 55, status: "Moderate", temp: { min: 16, max: 23 }, wind: 18, humidity: 58, mainPollutant: "PM10", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Air Quality
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Forecast
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Detailed air quality predictions and weather forecasts for {selectedLocation.name}
          </p>
        </div>

        <Tabs defaultValue="hourly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10 border-white/20">
            <TabsTrigger value="hourly" className="text-white data-[state=active]:bg-white/20">
              24-Hour Forecast
            </TabsTrigger>
            <TabsTrigger value="weekly" className="text-white data-[state=active]:bg-white/20">
              7-Day Forecast
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hourly" className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Hourly Air Quality Trend</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={hourlyData}>
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
                    <XAxis dataKey="time" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="aqi" stroke="#3b82f6" fill="url(#aqiGradient)" strokeWidth={3} />
                    <Line type="monotone" dataKey="pm25" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="o3" stroke="#f59e0b" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-4">Temperature & Humidity</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis dataKey="time" stroke="#9ca3af" fontSize={12} />
                      <YAxis stroke="#9ca3af" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '8px' }} />
                      <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2} name="Temperature (°C)" />
                      <Line type="monotone" dataKey="humidity" stroke="#06b6d4" strokeWidth={2} name="Humidity (%)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-4">Wind Speed</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hourlyData}>
                      <defs>
                        <linearGradient id="windGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis dataKey="time" stroke="#9ca3af" fontSize={12} />
                      <YAxis stroke="#9ca3af" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="wind" stroke="#8b5cf6" fill="url(#windGradient)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="weekly" className="space-y-6">
            {weeklyForecast.map((day, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{day.day}</h3>
                      <p className="text-slate-300">{day.date}</p>
                    </div>
                    <Badge className={`${
                      day.status === "Good" ? "bg-emerald-500/20 text-emerald-300" :
                      "bg-orange-500/20 text-orange-300"
                    }`}>
                      {day.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-white">{day.aqi}</span>
                    {day.trend === "up" ? (
                      <TrendingUp className="h-5 w-5 text-red-400" />
                    ) : day.trend === "down" ? (
                      <TrendingDown className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <div className="w-5 h-5 bg-slate-400 rounded-full"></div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-red-400" />
                    <span className="text-slate-300">{day.temp.min}°/{day.temp.max}°C</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind className="h-4 w-4 text-blue-400" />
                    <span className="text-slate-300">{day.wind} mph</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-4 w-4 text-purple-400" />
                    <span className="text-slate-300">{day.humidity}%</span>
                  </div>
                  <div className="text-slate-300">
                    Main: {day.mainPollutant}
                  </div>
                  <div className="text-slate-300">
                    AQI: {day.aqi}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Forecast;
