
import NavigationBar from "@/components/NavigationBar";
import { Card } from "@/components/ui/card";

const Heatmap = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary p-4 pt-8 rounded-b-lg flex items-center">
        <img
          src="/lovable-uploads/5e35d235-39a0-4a46-98f7-5999560a051b.png"
          alt="Logo"
          className="h-8 mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Safety Heatmap</h1>
          <p className="text-white/90">View area safety levels</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        <div className="bg-white rounded-lg shadow-sm mb-4 h-64 flex items-center justify-center">
          <p className="text-gray-500">Heatmap visualization will be here</p>
        </div>

        <Card className="p-4 mb-4">
          <h2 className="font-semibold mb-2">Area Statistics</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Safety Score</span>
              <span className="font-semibold text-primary">7.5/10</span>
            </div>
            <div className="flex justify-between">
              <span>Crime Rate</span>
              <span className="text-secondary">Low</span>
            </div>
            <div className="flex justify-between">
              <span>Emergency Services</span>
              <span className="text-green-500">Available 24/7</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-2">Safety Tips</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Stay in well-lit areas during night time</li>
            <li>• Keep emergency contacts readily available</li>
            <li>• Be aware of your surroundings</li>
          </ul>
        </Card>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Heatmap;
