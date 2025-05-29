
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Video, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredClinics = [
    {
      id: 1,
      name: "HealthCare Plus",
      specialty: "General Medicine",
      rating: 4.8,
      reviews: 324,
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      nextAvailable: "Today 2:00 PM"
    },
    {
      id: 2,
      name: "DentalCare Pro",
      specialty: "Dental Care",
      rating: 4.9,
      reviews: 156,
      location: "City Center",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      nextAvailable: "Tomorrow 10:00 AM"
    },
    {
      id: 3,
      name: "EyeCare Specialists",
      specialty: "Ophthalmology",
      rating: 4.7,
      reviews: 89,
      location: "Medical District",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      nextAvailable: "Today 4:30 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">HealHub</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/clinics" className="text-gray-700 hover:text-blue-600 transition-colors">
                Find Clinics
              </Link>
              <Link to="/appointments" className="text-gray-700 hover:text-blue-600 transition-colors">
                My Appointments
              </Link>
              <Link to="/live" className="text-gray-700 hover:text-blue-600 transition-colors">
                Live Sessions
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/auth">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Health, <span className="text-blue-600">Connected</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the best clinics, book appointments instantly, and connect with healthcare professionals through our social platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clinics">
              <Button size="lg" className="w-full sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Find Clinics
              </Button>
            </Link>
            <Link to="/live">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Video className="mr-2 h-5 w-5" />
                Join Live Session
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Clinics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Clinics</h3>
            <p className="text-gray-600">Top-rated healthcare providers in your area</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClinics.map((clinic) => (
              <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${clinic.image})` }} />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{clinic.name}</CardTitle>
                      <CardDescription>{clinic.specialty}</CardDescription>
                    </div>
                    <Badge variant="secondary">{clinic.specialty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{clinic.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({clinic.reviews})</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {clinic.location}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-green-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {clinic.nextAvailable}
                    </div>
                    <Link to={`/clinic/${clinic.id}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HealHub?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Easy Discovery</h4>
              <p className="text-gray-600">Find and compare clinics based on location, specialty, and reviews.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Booking</h4>
              <p className="text-gray-600">Book appointments instantly with real-time availability.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Live Sessions</h4>
              <p className="text-gray-600">Join live health sessions and connect with professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">HealHub</h5>
              <p className="text-gray-400">Connecting patients with quality healthcare providers.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">For Patients</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/clinics" className="hover:text-white">Find Clinics</Link></li>
                <li><Link to="/appointments" className="hover:text-white">Book Appointment</Link></li>
                <li><Link to="/live" className="hover:text-white">Live Sessions</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">For Clinics</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/clinic-signup" className="hover:text-white">Join HealHub</Link></li>
                <li><Link to="/clinic-dashboard" className="hover:text-white">Clinic Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
