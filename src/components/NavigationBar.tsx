
import { Home, Map, Calendar, Navigation } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link
          to="/heatmap"
          className={`flex flex-col items-center ${
            isActive("/heatmap") ? "text-primary" : "text-gray-500"
          }`}
        >
          <Map className="w-6 h-6" />
          <span className="text-xs">Heatmap</span>
        </Link>
        <Link
          to="/navigation"
          className={`flex flex-col items-center ${
            isActive("/navigation") ? "text-primary" : "text-gray-500"
          }`}
        >
          <Navigation className="w-6 h-6" />
          <span className="text-xs">Navigation</span>
        </Link>
        <Link
          to="/trip-planning"
          className={`flex flex-col items-center ${
            isActive("/trip-planning") ? "text-primary" : "text-gray-500"
          }`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Trip Planning</span>
        </Link>
        <Link
          to="/"
          className={`flex flex-col items-center ${
            isActive("/") ? "text-primary" : "text-gray-500"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
