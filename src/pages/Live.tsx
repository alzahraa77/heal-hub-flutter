
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Video, Users, Clock, Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Live = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const liveSessions = [
    {
      id: 1,
      title: "Heart Health Q&A",
      description: "Join Dr. Smith for a live discussion about maintaining cardiovascular health",
      doctor: "Dr. Michael Smith",
      specialty: "Cardiology",
      clinic: "CardioHealth Center",
      viewers: 45,
      duration: "30 min",
      status: "live",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 2,
      title: "Mental Wellness Workshop",
      description: "Learn coping strategies and stress management techniques",
      doctor: "Dr. Lisa Johnson",
      specialty: "Psychology",
      clinic: "MindCare Clinic",
      viewers: 67,
      duration: "45 min",
      status: "live",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  const upcomingSessions = [
    {
      id: 3,
      title: "Nutrition for Busy Professionals",
      description: "Quick and healthy meal planning tips for working adults",
      doctor: "Dr. Amanda Chen",
      specialty: "Nutrition",
      clinic: "WellnessFirst",
      scheduledTime: "2:00 PM",
      date: "Tomorrow",
      estimatedViewers: 30,
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 4,
      title: "Pediatric Care Basics",
      description: "Essential information for new parents about child healthcare",
      doctor: "Dr. Robert Martinez",
      specialty: "Pediatrics",
      clinic: "Children's Health Center",
      scheduledTime: "4:00 PM",
      date: "Friday",
      estimatedViewers: 50,
      thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">HealHub</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/clinics" className="text-gray-700 hover:text-blue-600">Find Clinics</Link>
              <Link to="/appointments" className="text-gray-700 hover:text-blue-600">My Appointments</Link>
              <Link to="/live" className="text-blue-600 font-medium">Live Sessions</Link>
            </nav>
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Live Health Sessions</h1>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search live sessions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Live Now */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold text-gray-900">Live Now</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveSessions.map((session) => (
              <Card key={session.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${session.thumbnail})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                        <Video className="mr-2 h-5 w-5" />
                        Join Live
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    LIVE
                  </Badge>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {session.viewers}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <CardDescription>{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{session.doctor}</p>
                      <p className="text-sm text-gray-500">{session.specialty} • {session.clinic}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {session.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingSessions.map((session) => (
              <Card key={session.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${session.thumbnail})` }} />
                <CardHeader>
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <CardDescription>{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">{session.doctor}</p>
                      <p className="text-sm text-gray-500">{session.specialty} • {session.clinic}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {session.date} at {session.scheduledTime}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        ~{session.estimatedViewers} expected
                      </div>
                    </div>
                    
                    <Button className="w-full">Set Reminder</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No sessions message */}
        {liveSessions.length === 0 && upcomingSessions.length === 0 && (
          <div className="text-center py-12">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No live sessions available</h3>
            <p className="text-gray-500">Check back later for upcoming health sessions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Live;
