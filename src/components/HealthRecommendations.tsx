
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Shield, Users, AlertTriangle } from "lucide-react";

interface HealthRecommendationsProps {
  aqi: number;
}

export const HealthRecommendations = ({ aqi }: HealthRecommendationsProps) => {
  const getRecommendations = (aqi: number) => {
    if (aqi <= 50) {
      return {
        level: "Good",
        color: "emerald",
        icon: Shield,
        recommendations: [
          "Perfect for outdoor activities",
          "Air quality is satisfactory",
          "No health concerns"
        ]
      };
    } else if (aqi <= 100) {
      return {
        level: "Moderate",
        color: "orange",
        icon: Heart,
        recommendations: [
          "Unusually sensitive people may experience minor breathing discomfort",
          "Outdoor activities are generally safe",
          "Consider reducing prolonged outdoor exertion"
        ]
      };
    } else {
      return {
        level: "Unhealthy",
        color: "red",
        icon: AlertTriangle,
        recommendations: [
          "Everyone may experience health effects",
          "Limit outdoor activities",
          "Wear a mask when going outside"
        ]
      };
    }
  };

  const rec = getRecommendations(aqi);
  const IconComponent = rec.icon;

  return (
    <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl h-fit">
      <div className="flex items-center space-x-3 mb-6">
        <IconComponent className={`h-6 w-6 ${
          rec.color === "emerald" ? "text-emerald-400" :
          rec.color === "orange" ? "text-orange-400" :
          "text-red-400"
        }`} />
        <h3 className="text-2xl font-bold text-white">Health Advice</h3>
      </div>

      <Alert className={`mb-6 border-l-4 ${
        rec.color === "emerald" ? "bg-emerald-500/10 border-emerald-500" :
        rec.color === "orange" ? "bg-orange-500/10 border-orange-500" :
        "bg-red-500/10 border-red-500"
      }`}>
        <AlertDescription className="text-white">
          <strong>Air Quality: {rec.level}</strong>
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        {rec.recommendations.map((recommendation, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-2xl">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              rec.color === "emerald" ? "bg-emerald-400" :
              rec.color === "orange" ? "bg-orange-400" :
              "bg-red-400"
            }`}></div>
            <p className="text-slate-300 text-sm leading-relaxed">{recommendation}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Users className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-300">Sensitive Groups</span>
        </div>
        <p className="text-xs text-slate-300">
          Children, elderly, and people with respiratory conditions should take extra precautions.
        </p>
      </div>
    </Card>
  );
};
