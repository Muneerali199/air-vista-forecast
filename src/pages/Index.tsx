
import { useState } from "react";
import { AirQualityDashboard } from "@/components/AirQualityDashboard";
import { LocationSearch } from "@/components/LocationSearch";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "New York City",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Air Quality
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Visualizer
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real-time air quality monitoring and forecasting to help you breathe easier and make informed decisions
          </p>
        </div>

        <LocationSearch 
          onLocationSelect={setSelectedLocation}
          selectedLocation={selectedLocation}
        />

        <AirQualityDashboard location={selectedLocation} />
      </div>
    </div>
  );
};

export default Index;
