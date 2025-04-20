
import NavigationBar from "@/components/NavigationBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary p-4 pt-8 rounded-b-lg">
        <h1 className="text-2xl font-bold text-white mb-2">Navigation</h1>
        <p className="text-white/90">Find your way safely</p>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        <Card className="p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold">Current Location</h2>
              <p className="text-sm text-gray-500">Central Park, New York</p>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>
          <div>
            <h2 className="font-semibold">Destination</h2>
            <p className="text-sm text-gray-500">Set your destination</p>
          </div>
        </Card>

        <div className="bg-white rounded-lg shadow-sm mb-4 h-64 flex items-center justify-center">
          <p className="text-gray-500">Map view will be here</p>
        </div>

        <Card className="p-4">
          <h2 className="font-semibold mb-2">Route Information</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Distance</span>
              <span>2.5 km</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Time</span>
              <span>15 mins</span>
            </div>
            <div className="flex justify-between">
              <span>Route Safety</span>
              <span className="text-primary font-semibold">Safe</span>
            </div>
          </div>
        </Card>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Navigation;
