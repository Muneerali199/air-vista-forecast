
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Wind, MapPin, Thermometer } from "lucide-react";

interface Location {
  name: string;
  coordinates: { lat: number; lng: number };
}

interface AirQualityCardProps {
  location: Location;
}

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
  uvIndex: number;
}

export const AirQualityCard = ({ location }: AirQualityCardProps) => {
  const [aqi, setAqi] = useState(85);
  const [status, setStatus] = useState("Moderate");
  const [color, setColor] = useState("orange");
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 22,
    humidity: 65,
    windSpeed: 12,
    windDirection: "NW",
    pressure: 1013,
    visibility: 10,
    uvIndex: 6
  });

  useEffect(() => {
    // Simulate API call with random data
    const simulateData = () => {
      const newAqi = Math.floor(Math.random() * 150) + 20;
      setAqi(newAqi);
      
      if (newAqi <= 50) {
        setStatus("Good");
        setColor("green");
      } else if (newAqi <= 100) {
        setStatus("Moderate");
        setColor("orange");
      } else {
        setStatus("Unhealthy");
        setColor("red");
      }

      // Simulate weather data
      setWeather({
        temperature: Math.floor(Math.random() * 35) + 5,
        humidity: Math.floor(Math.random() * 40) + 40,
        windSpeed: Math.floor(Math.random() * 25) + 5,
        windDirection: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.floor(Math.random() * 8)],
        pressure: Math.floor(Math.random() * 50) + 990,
        visibility: Math.floor(Math.random() * 10) + 5,
        uvIndex: Math.floor(Math.random() * 11) + 1
      });
    };

    simulateData();
    const interval = setInterval(simulateData, 15000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-slate-300" />
          <h2 className="text-xl font-semibold text-white">{location.name}</h2>
        </div>
        <Badge 
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            color === "green" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
            color === "orange" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
            "bg-red-500/20 text-red-300 border-red-500/30"
          }`}
        >
          {status}
        </Badge>
      </div>

      <div className="text-center mb-8">
        <div className="relative mb-4">
          <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-2xl ${
            color === "green" ? "bg-gradient-to-br from-emerald-400 to-emerald-600" :
            color === "orange" ? "bg-gradient-to-br from-orange-400 to-orange-600" :
            "bg-gradient-to-br from-red-400 to-red-600"
          }`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{aqi}</div>
              <div className="text-sm text-white/80">AQI</div>
            </div>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-white/10 animate-pulse"></div>
        </div>
        <p className="text-slate-300 text-lg">Air Quality Index</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-white/5 rounded-2xl">
          <Thermometer className="h-6 w-6 text-red-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">{weather.temperature}°C</div>
          <div className="text-xs text-slate-300">Temperature</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-2xl">
          <Wind className="h-6 w-6 text-blue-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">{weather.windSpeed} mph</div>
          <div className="text-xs text-slate-300">Wind {weather.windDirection}</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-2xl">
          <Cloud className="h-6 w-6 text-purple-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">{weather.humidity}%</div>
          <div className="text-xs text-slate-300">Humidity</div>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-2xl">
          <div className="w-6 h-6 bg-yellow-400 rounded-full mx-auto mb-2"></div>
          <div className="text-xl font-bold text-white">{weather.uvIndex}</div>
          <div className="text-xs text-slate-300">UV Index</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-3 bg-white/5 rounded-xl">
          <div className="text-sm text-slate-300">Pressure</div>
          <div className="text-lg font-semibold text-white">{weather.pressure} hPa</div>
        </div>
        <div className="p-3 bg-white/5 rounded-xl">
          <div className="text-sm text-slate-300">Visibility</div>
          <div className="text-lg font-semibold text-white">{weather.visibility} km</div>
        </div>
      </div>
    </Card>
  );
};
