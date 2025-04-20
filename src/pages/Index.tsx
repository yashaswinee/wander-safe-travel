
import { Bell } from "lucide-react";
import NavigationBar from "@/components/NavigationBar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary p-4 pt-8 rounded-b-lg">
        <div className="flex justify-between items-center mb-4">
          <img
            src="/lovable-uploads/5e35d235-39a0-4a46-98f7-5999560a051b.png"
            alt="Logo"
            className="h-8"
          />
          <div className="flex gap-4">
            <button className="text-white">
              <Bell className="w-6 h-6" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/20" />
          </div>
        </div>
        
        <div className="text-white mb-4">
          <h1 className="text-2xl font-bold">Hi User!</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-primary text-xl font-bold">7</span>
            </div>
            <div>
              <div className="font-semibold">Safety Score</div>
              <div className="text-sm opacity-90">Suburbs : Current Location</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-24">
        <Button
          variant="outline"
          className="w-full bg-white mb-4 h-12"
          onClick={() => alert("Calling support...")}
        >
          📞 Call 24/7 Support
        </Button>

        <Button
          variant="destructive"
          className="w-full mb-6 h-12 bg-secondary"
          onClick={() => alert("SOS Activated!")}
        >
          SOS
        </Button>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2">Share Your Live Location</h3>
            <img
              src="/lovable-uploads/0a1b29fd-1bd0-48ac-a0e6-3f72f75c0bb3.png"
              alt="Share location"
              className="w-full h-24 object-cover rounded"
            />
          </Card>
          
          <div className="space-y-4">
            <Link to="/heatmap">
              <Card className="p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Heatmap</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
            
            <Link to="/navigation">
              <Card className="p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Navigation</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
            
            <Link to="/trip-planning">
              <Card className="p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Trip Planning</span>
                  <span>→</span>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <Card className="p-4 bg-white shadow-sm mb-4">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              🛡️
            </div>
            <div>
              <h3 className="font-semibold mb-1">Safety Tip</h3>
              <p className="text-sm text-gray-600">
                When travelling at night, stick to well-lit areas and share your
                location with trusted contacts.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-accent">
          <div className="flex items-center gap-4">
            <span className="text-2xl">🔗</span>
            <span className="font-medium text-secondary">
              Connect with your lens
            </span>
          </div>
        </Card>
      </main>

      <NavigationBar />
    </div>
  );
};

export default Index;
