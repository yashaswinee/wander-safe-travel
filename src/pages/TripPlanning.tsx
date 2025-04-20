
import NavigationBar from "@/components/NavigationBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TripPlanning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary p-4 pt-8 rounded-b-lg">
        <h1 className="text-2xl font-bold text-white mb-2">Trip Planning</h1>
        <p className="text-white/90">Plan your journey</p>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        <Card className="p-4 mb-4">
          <h2 className="font-semibold mb-4">Upcoming Trip</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="font-medium">Paris, France</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Dates</p>
              <p className="font-medium">May 15 - May 22, 2025</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Itinerary</h3>
            <p className="text-sm text-gray-500 mb-2">4 days planned</p>
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Accommodation</h3>
            <p className="text-sm text-gray-500 mb-2">2 hotels booked</p>
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Card>
        </div>

        <Card className="p-4 mb-4">
          <h2 className="font-semibold mb-2">Local Emergency Contacts</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Police</span>
              <span className="font-medium">112</span>
            </div>
            <div className="flex justify-between">
              <span>Ambulance</span>
              <span className="font-medium">115</span>
            </div>
            <div className="flex justify-between">
              <span>Embassy</span>
              <span className="font-medium">+33 1 43 12 22 22</span>
            </div>
          </div>
        </Card>

        <Button className="w-full" variant="outline">
          Add New Trip
        </Button>
      </main>

      <NavigationBar />
    </div>
  );
};

export default TripPlanning;
