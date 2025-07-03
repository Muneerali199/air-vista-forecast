
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, TrendingDown, Thermometer, Wind } from "lucide-react";

interface Location {
  name: string;
  coordinates: { lat: number; lng: number };
}

interface ForecastCardProps {
  location: Location;
}

interface ForecastDay {
  day: string;
  aqi: number;
  status: string;
  trend: string;
  temperature: { min: number; max: number };
  windSpeed: number;
  humidity: number;
  mainPollutant: string;
}

export const ForecastCard = ({ location }: ForecastCardProps) => {
  const forecast: ForecastDay[] = [
    { 
      day: "Today", 
      aqi: 85, 
      status: "Moderate", 
      trend: "stable",
      temperature: { min: 18, max: 25 },
      windSpeed: 12,
      humidity: 65,
      mainPollutant: "PM2.5"
    },
    { 
      day: "Tomorrow", 
      aqi: 72, 
      status: "Moderate", 
      trend: "down",
      temperature: { min: 16, max: 23 },
      windSpeed: 15,
      humidity: 58,
      mainPollutant: "O₃"
    },
    { 
      day: "Wednesday", 
      aqi: 58, 
      status: "Moderate", 
      trend: "down",
      temperature: { min: 14, max: 21 },
      windSpeed: 18,
      humidity: 52,
      mainPollutant: "PM10"
    },
    { 
      day: "Thursday", 
      aqi: 45, 
      status: "Good", 
      trend: "down",
      temperature: { min: 13, max: 19 },
      windSpeed: 20,
      humidity: 48,
      mainPollutant: "NO₂"
    },
    { 
      day: "Friday", 
      aqi: 62, 
      status: "Moderate", 
      trend: "up",
      temperature: { min: 15, max: 22 },
      windSpeed: 16,
      humidity: 55,
      mainPollutant: "PM2.5"
    },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="h-6 w-6 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">5-Day Forecast</h3>
      </div>
      
      <div className="space-y-4">
        {forecast.map((day, index) => (
          <div key={index} className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <div className="text-white font-medium w-20">{day.day}</div>
                <Badge className={`${
                  day.status === "Good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                  "bg-orange-500/20 text-orange-300 border-orange-500/30"
                }`}>
                  {day.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white font-bold text-lg">{day.aqi}</span>
                {day.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-red-400" />
                ) : day.trend === "down" ? (
                  <TrendingDown className="h-4 w-4 text-emerald-400" />
                ) : (
                  <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div className="flex items-center space-x-1">
                <Thermometer className="h-3 w-3 text-red-300" />
                <span className="text-slate-300">{day.temperature.min}°/{day.temperature.max}°</span>
              </div>
              <div className="flex items-center space-x-1">
                <Wind className="h-3 w-3 text-blue-300" />
                <span className="text-slate-300">{day.windSpeed} mph</span>
              </div>
              <div className="text-slate-300">
                {day.humidity}% humidity
              </div>
              <div className="text-slate-300">
                Main: {day.mainPollutant}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl">
        <h4 className="text-sm font-medium text-blue-300 mb-2">Forecast Summary</h4>
        <p className="text-xs text-slate-300">
          Air quality is expected to improve over the next few days due to increased wind speeds and lower pollution levels.
        </p>
      </div>
    </Card>
  );
};
