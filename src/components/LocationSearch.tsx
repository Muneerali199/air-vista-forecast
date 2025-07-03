
import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Location {
  name: string;
  coordinates: { lat: number; lng: number };
}

interface LocationSearchProps {
  onLocationSelect: (location: Location) => void;
  selectedLocation: Location;
}

export const LocationSearch = ({ onLocationSelect, selectedLocation }: LocationSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularLocations = [
    // North America
    { name: "New York City", coordinates: { lat: 40.7128, lng: -74.0060 } },
    { name: "Los Angeles", coordinates: { lat: 34.0522, lng: -118.2437 } },
    { name: "Chicago", coordinates: { lat: 41.8781, lng: -87.6298 } },
    { name: "Toronto", coordinates: { lat: 43.6532, lng: -79.3832 } },
    { name: "Mexico City", coordinates: { lat: 19.4326, lng: -99.1332 } },
    
    // Europe
    { name: "London", coordinates: { lat: 51.5074, lng: -0.1278 } },
    { name: "Paris", coordinates: { lat: 48.8566, lng: 2.3522 } },
    { name: "Berlin", coordinates: { lat: 52.5200, lng: 13.4050 } },
    { name: "Madrid", coordinates: { lat: 40.4168, lng: -3.7038 } },
    { name: "Rome", coordinates: { lat: 41.9028, lng: 12.4964 } },
    { name: "Amsterdam", coordinates: { lat: 52.3676, lng: 4.9041 } },
    { name: "Barcelona", coordinates: { lat: 41.3851, lng: 2.1734 } },
    { name: "Vienna", coordinates: { lat: 48.2082, lng: 16.3738 } },
    { name: "Prague", coordinates: { lat: 50.0755, lng: 14.4378 } },
    { name: "Stockholm", coordinates: { lat: 59.3293, lng: 18.0686 } },
    
    // Asia
    { name: "Tokyo", coordinates: { lat: 35.6762, lng: 139.6503 } },
    { name: "Beijing", coordinates: { lat: 39.9042, lng: 116.4074 } },
    { name: "Shanghai", coordinates: { lat: 31.2304, lng: 121.4737 } },
    { name: "Delhi", coordinates: { lat: 28.7041, lng: 77.1025 } },
    { name: "Mumbai", coordinates: { lat: 19.0760, lng: 72.8777 } },
    { name: "Bengaluru", coordinates: { lat: 12.9716, lng: 77.5946 } },
    { name: "Chennai", coordinates: { lat: 13.0827, lng: 80.2707 } },
    { name: "Kolkata", coordinates: { lat: 22.5726, lng: 88.3639 } },
    { name: "Hyderabad", coordinates: { lat: 17.3850, lng: 78.4867 } },
    { name: "Pune", coordinates: { lat: 18.5204, lng: 73.8567 } },
    { name: "Seoul", coordinates: { lat: 37.5665, lng: 126.9780 } },
    { name: "Bangkok", coordinates: { lat: 13.7563, lng: 100.5018 } },
    { name: "Singapore", coordinates: { lat: 1.3521, lng: 103.8198 } },
    { name: "Kuala Lumpur", coordinates: { lat: 3.1390, lng: 101.6869 } },
    { name: "Jakarta", coordinates: { lat: -6.2088, lng: 106.8456 } },
    { name: "Manila", coordinates: { lat: 14.5995, lng: 120.9842 } },
    { name: "Ho Chi Minh City", coordinates: { lat: 10.8231, lng: 106.6297 } },
    { name: "Hong Kong", coordinates: { lat: 22.3193, lng: 114.1694 } },
    { name: "Taipei", coordinates: { lat: 25.0330, lng: 121.5654 } },
    { name: "Dubai", coordinates: { lat: 25.2048, lng: 55.2708 } },
    { name: "Tel Aviv", coordinates: { lat: 32.0853, lng: 34.7818 } },
    
    // Australia & Oceania
    { name: "Sydney", coordinates: { lat: -33.8688, lng: 151.2093 } },
    { name: "Melbourne", coordinates: { lat: -37.8136, lng: 144.9631 } },
    { name: "Brisbane", coordinates: { lat: -27.4698, lng: 153.0251 } },
    { name: "Perth", coordinates: { lat: -31.9505, lng: 115.8605 } },
    { name: "Auckland", coordinates: { lat: -36.8485, lng: 174.7633 } },
    
    // South America
    { name: "São Paulo", coordinates: { lat: -23.5558, lng: -46.6396 } },
    { name: "Rio de Janeiro", coordinates: { lat: -22.9068, lng: -43.1729 } },
    { name: "Buenos Aires", coordinates: { lat: -34.6118, lng: -58.3960 } },
    { name: "Santiago", coordinates: { lat: -33.4489, lng: -70.6693 } },
    { name: "Lima", coordinates: { lat: -12.0464, lng: -77.0428 } },
    { name: "Bogotá", coordinates: { lat: 4.7110, lng: -74.0721 } },
    
    // Africa
    { name: "Cairo", coordinates: { lat: 30.0444, lng: 31.2357 } },
    { name: "Lagos", coordinates: { lat: 6.5244, lng: 3.3792 } },
    { name: "Johannesburg", coordinates: { lat: -26.2041, lng: 28.0473 } },
    { name: "Cape Town", coordinates: { lat: -33.9249, lng: 18.4241 } },
    { name: "Nairobi", coordinates: { lat: -1.2921, lng: 36.8219 } },
    { name: "Casablanca", coordinates: { lat: 33.5731, lng: -7.5898 } },
    { name: "Tunis", coordinates: { lat: 36.8065, lng: 10.1815 } },
    
    // Middle East
    { name: "Istanbul", coordinates: { lat: 41.0082, lng: 28.9784 } },
    { name: "Tehran", coordinates: { lat: 35.6892, lng: 51.3890 } },
    { name: "Riyadh", coordinates: { lat: 24.7136, lng: 46.6753 } },
    { name: "Kuwait City", coordinates: { lat: 29.3759, lng: 47.9774 } },
    { name: "Doha", coordinates: { lat: 25.2854, lng: 51.5310 } },
    
    // Additional European Cities
    { name: "Moscow", coordinates: { lat: 55.7558, lng: 37.6176 } },
    { name: "St. Petersburg", coordinates: { lat: 59.9311, lng: 30.3609 } },
    { name: "Warsaw", coordinates: { lat: 52.2297, lng: 21.0122 } },
    { name: "Budapest", coordinates: { lat: 47.4979, lng: 19.0402 } },
    { name: "Athens", coordinates: { lat: 37.9755, lng: 23.7348 } },
    { name: "Lisbon", coordinates: { lat: 38.7223, lng: -9.1393 } },
    { name: "Brussels", coordinates: { lat: 50.8503, lng: 4.3517 } },
    { name: "Copenhagen", coordinates: { lat: 55.6761, lng: 12.5683 } },
    { name: "Oslo", coordinates: { lat: 59.9139, lng: 10.7522 } },
    { name: "Helsinki", coordinates: { lat: 60.1699, lng: 24.9384 } },
    { name: "Zurich", coordinates: { lat: 47.3769, lng: 8.5417 } },
    { name: "Milan", coordinates: { lat: 45.4642, lng: 9.1900 } },
  ];

  const filteredLocations = searchTerm
    ? popularLocations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : popularLocations;

  const handleLocationClick = (location: Location) => {
    onLocationSelect(location);
  };

  return (
    <div className="mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            placeholder="Search for a city or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 text-lg bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-slate-400 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Current: {selectedLocation.name}</span>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="flex flex-wrap gap-3 justify-center p-4">
            {filteredLocations.map((location) => (
              <Button
                key={location.name}
                variant={selectedLocation.name === location.name ? "default" : "outline"}
                onClick={() => handleLocationClick(location)}
                className={`rounded-full px-4 py-2 transition-all duration-300 text-sm ${
                  selectedLocation.name === location.name
                    ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg scale-105"
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:scale-105"
                }`}
              >
                {location.name}
              </Button>
            ))}
          </div>
        </div>

        {searchTerm && filteredLocations.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-400">No cities found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};
