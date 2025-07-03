
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const PollutantGrid = () => {
  const pollutants = [
    { name: "PM2.5", value: 25, max: 50, unit: "μg/m³", color: "emerald", status: "Good" },
    { name: "PM10", value: 45, max: 100, unit: "μg/m³", color: "orange", status: "Moderate" },
    { name: "O₃", value: 85, max: 120, unit: "μg/m³", color: "red", status: "Poor" },
    { name: "NO₂", value: 35, max: 80, unit: "μg/m³", color: "emerald", status: "Good" },
    { name: "SO₂", value: 15, max: 60, unit: "μg/m³", color: "emerald", status: "Good" },
    { name: "CO", value: 2.5, max: 10, unit: "mg/m³", color: "emerald", status: "Good" },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
      <h3 className="text-2xl font-bold text-white mb-6">Pollutant Levels</h3>
      <div className="space-y-4">
        {pollutants.map((pollutant) => (
          <div key={pollutant.name} className="p-4 bg-white/5 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <h4 className="text-lg font-semibold text-white">{pollutant.name}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  pollutant.color === "emerald" ? "bg-emerald-500/20 text-emerald-300" :
                  pollutant.color === "orange" ? "bg-orange-500/20 text-orange-300" :
                  "bg-red-500/20 text-red-300"
                }`}>
                  {pollutant.status}
                </span>
              </div>
              <span className="text-slate-300 text-sm">
                {pollutant.value} {pollutant.unit}
              </span>
            </div>
            <Progress 
              value={(pollutant.value / pollutant.max) * 100} 
              className="h-2 bg-white/10"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};
