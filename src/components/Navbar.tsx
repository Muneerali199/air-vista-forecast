
import { Wind } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="relative z-50 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl shadow-lg">
            <Wind className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">AirViz</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-slate-300 hover:text-white transition-colors">Dashboard</Link>
          <Link to="/forecast" className="text-slate-300 hover:text-white transition-colors">Forecast</Link>
          <Link to="/alerts" className="text-slate-300 hover:text-white transition-colors">Alerts</Link>
        </div>
      </div>
    </nav>
  );
};
