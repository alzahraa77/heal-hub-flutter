import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Calendar, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Clinics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const clinics = [
    {
      id: 1,
      name: "HealthCare Plus",
      specialty: "General Medicine",
      rating: 4.8,
      reviews: 324,
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      nextAvailable: "Today 2:00 PM",
      description: "Comprehensive healthcare services with experienced doctors.",
      verified: true
    },
    {
      id: 2,
      name: "DentalCare Pro",
      specialty: "Dental Care",
      rating: 4.9,
      reviews: 156,
      location: "City Center",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      nextAvailable: "Tomorrow 10:00 AM",
      description: "Modern dental care with the latest technology.",
      verified: true
    },
    {
      id: 3,
      name: "EyeCare Specialists",
      specialty: "Ophthalmology",
      rating: 4.7,
      reviews: 89,
      location: "Medical District",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      nextAvailable: "Today 4:30 PM",
      description: "Expert eye care and vision correction services.",
      verified: false
    },
    {
      id: 4,
      name: "CardioHealth Center",
      specialty: "Cardiology",
      rating: 4.9,
      reviews: 203,
      location: "Medical District",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      nextAvailable: "Wednesday 9:00 AM",
      description: "Specialized cardiac care and prevention programs.",
      verified: true
    }
  ];

  const specialties = ["General Medicine", "Dental Care", "Ophthalmology", "Cardiology", "Dermatology"];
  const locations = ["Downtown", "City Center", "Medical District", "Suburbs"];

  const filteredClinics = clinics.filter(clinic => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clinic.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === "all" || clinic.specialty === selectedSpecialty;
    const matchesLocation = !selectedLocation || selectedLocation === "all" || clinic.location === selectedLocation;
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">HealHub</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/clinics" className="text-blue-600 font-medium">Find Clinics</Link>
              <Link to="/appointments" className="text-gray-700 hover:text-blue-600">My Appointments</Link>
              <Link to="/live" className="text-gray-700 hover:text-blue-600">Live Sessions</Link>
            </nav>
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Healthcare Providers</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search clinics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {specialties.map(specialty => (
                    <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredClinics.map((clinic) => (
            <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${clinic.image})` }} />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{clinic.name}</CardTitle>
                          {clinic.verified && (
                            <Badge className="bg-green-100 text-green-800">Verified</Badge>
                          )}
                        </div>
                        <CardDescription>{clinic.specialty}</CardDescription>
                      </div>
                      <Badge variant="secondary">{clinic.specialty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{clinic.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{clinic.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({clinic.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {clinic.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-green-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        Next: {clinic.nextAvailable}
                      </div>
                      <div className="space-x-2">
                        <Link to={`/clinic/${clinic.id}`}>
                          <Button variant="outline" size="sm">View Profile</Button>
                        </Link>
                        <Link to={`/book/${clinic.id}`}>
                          <Button size="sm">Book Now</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredClinics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No clinics found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("");
                setSelectedLocation("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinics;
