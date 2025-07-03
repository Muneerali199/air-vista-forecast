
import { AirQualityCard } from "./AirQualityCard";
import { AirQualityChart } from "./AirQualityChart";
import { PollutantGrid } from "./PollutantGrid";
import { ForecastCard } from "./ForecastCard";
import { HealthRecommendations } from "./HealthRecommendations";

interface Location {
  name: string;
  coordinates: { lat: number; lng: number };
}

interface AirQualityDashboardProps {
  location: Location;
}

export const AirQualityDashboard = ({ location }: AirQualityDashboardProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AirQualityCard location={location} />
        </div>
        <div>
          <HealthRecommendations aqi={85} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PollutantGrid />
        <ForecastCard location={location} />
      </div>

      <div className="w-full">
        <AirQualityChart location={location} />
      </div>
    </div>
  );
};
