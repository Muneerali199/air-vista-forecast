
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Bell, Info, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";

interface Alert {
  id: string;
  type: "warning" | "critical" | "info";
  title: string;
  description: string;
  location: string;
  timestamp: string;
  pollutant?: string;
  level?: number;
  isActive: boolean;
}

const Alerts = () => {
  const [alerts] = useState<Alert[]>([
    {
      id: "1",
      type: "critical",
      title: "Unhealthy Air Quality Alert",
      description: "PM2.5 levels have exceeded 150 μg/m³. Limit outdoor activities and wear masks when going outside.",
      location: "Downtown Los Angeles",
      timestamp: "2 hours ago",
      pollutant: "PM2.5",
      level: 165,
      isActive: true
    },
    {
      id: "2",
      type: "warning",
      title: "High Ozone Levels",
      description: "Ground-level ozone concentrations are elevated. Sensitive individuals should reduce prolonged outdoor exertion.",
      location: "San Fernando Valley",
      timestamp: "4 hours ago",
      pollutant: "O₃",
      level: 95,
      isActive: true
    },
    {
      id: "3",
      type: "info",
      title: "Air Quality Improvement Expected",
      description: "Weather conditions favor pollutant dispersion. Air quality is expected to improve over the next 24 hours.",
      location: "Orange County",
      timestamp: "6 hours ago",
      isActive: true
    },
    {
      id: "4",
      type: "warning",
      title: "Wildfire Smoke Advisory",
      description: "Smoke from nearby wildfires may affect air quality. Monitor conditions and limit outdoor activities if sensitive.",
      location: "Riverside County",
      timestamp: "1 day ago",
      pollutant: "PM2.5",
      level: 85,
      isActive: false
    }
  ]);

  const activeAlerts = alerts.filter(alert => alert.isActive);
  const pastAlerts = alerts.filter(alert => !alert.isActive);

  const AlertCard = ({ alert }: { alert: Alert }) => {
    const getAlertIcon = (type: string) => {
      switch (type) {
        case "critical":
          return <AlertTriangle className="h-5 w-5 text-red-400" />;
        case "warning":
          return <AlertTriangle className="h-5 w-5 text-orange-400" />;
        default:
          return <Info className="h-5 w-5 text-blue-400" />;
      }
    };

    const getAlertColor = (type: string) => {
      switch (type) {
        case "critical":
          return "border-red-500/30 bg-red-500/10";
        case "warning":
          return "border-orange-500/30 bg-orange-500/10";
        default:
          return "border-blue-500/30 bg-blue-500/10";
      }
    };

    return (
      <Card className={`p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl ${getAlertColor(alert.type)}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getAlertIcon(alert.type)}
            <div>
              <h3 className="text-lg font-semibold text-white">{alert.title}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4 text-slate-300" />
                  <span className="text-sm text-slate-300">{alert.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-slate-300" />
                  <span className="text-sm text-slate-300">{alert.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
          <Badge className={`${
            alert.type === "critical" ? "bg-red-500/20 text-red-300" :
            alert.type === "warning" ? "bg-orange-500/20 text-orange-300" :
            "bg-blue-500/20 text-blue-300"
          }`}>
            {alert.type.toUpperCase()}
          </Badge>
        </div>
        
        <p className="text-slate-300 mb-4 leading-relaxed">{alert.description}</p>
        
        {alert.pollutant && alert.level && (
          <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl">
            <div className="text-sm text-slate-300">
              <span className="font-medium text-white">{alert.pollutant}:</span> {alert.level} μg/m³
            </div>
          </div>
        )}
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Air Quality
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Alerts
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay informed about air quality conditions and health advisories in your area
          </p>
        </div>

        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bell className="h-8 w-8 text-blue-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Alert Summary</h2>
                  <p className="text-slate-300">Current active alerts in your region</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-red-400">
                    {alerts.filter(a => a.type === "critical" && a.isActive).length}
                  </div>
                  <div className="text-xs text-red-300">Critical</div>
                </div>
                <div className="p-3 bg-orange-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-orange-400">
                    {alerts.filter(a => a.type === "warning" && a.isActive).length}
                  </div>
                  <div className="text-xs text-orange-300">Warning</div>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">
                    {alerts.filter(a => a.type === "info" && a.isActive).length}
                  </div>
                  <div className="text-xs text-blue-300">Info</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10 border-white/20">
            <TabsTrigger value="active" className="text-white data-[state=active]:bg-white/20">
              Active Alerts ({activeAlerts.length})
            </TabsTrigger>
            <TabsTrigger value="past" className="text-white data-[state=active]:bg-white/20">
              Past Alerts ({pastAlerts.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-6">
            {activeAlerts.length > 0 ? (
              activeAlerts.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))
            ) : (
              <Card className="p-12 text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 shadow-2xl rounded-3xl">
                <Bell className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Active Alerts</h3>
                <p className="text-slate-300">Air quality conditions are currently within acceptable levels.</p>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            {pastAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Alerts;
