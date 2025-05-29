
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Appointments = () => {
  const upcomingAppointments = [
    {
      id: 1,
      clinicName: "HealthCare Plus",
      doctorName: "Dr. Sarah Johnson",
      specialty: "General Medicine",
      date: "2024-01-15",
      time: "2:00 PM",
      type: "In-person",
      status: "confirmed",
      location: "Downtown Medical Center"
    },
    {
      id: 2,
      clinicName: "DentalCare Pro",
      doctorName: "Dr. Michael Chen",
      specialty: "Dental Care",
      date: "2024-01-18",
      time: "10:00 AM",
      type: "In-person",
      status: "confirmed",
      location: "City Center Dental"
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      clinicName: "EyeCare Specialists",
      doctorName: "Dr. Emily Rodriguez",
      specialty: "Ophthalmology",
      date: "2024-01-10",
      time: "4:30 PM",
      type: "Video Call",
      status: "completed",
      location: "Virtual"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const AppointmentCard = ({ appointment, showActions = true }: { appointment: any; showActions?: boolean }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{appointment.clinicName}</CardTitle>
            <CardDescription>
              {appointment.doctorName} • {appointment.specialty}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(appointment.status)}>
            {appointment.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm">{appointment.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm">{appointment.time}</span>
          </div>
          <div className="flex items-center">
            {appointment.type === "Video Call" ? (
              <Video className="h-4 w-4 mr-2 text-gray-500" />
            ) : (
              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            )}
            <span className="text-sm">{appointment.location}</span>
          </div>
        </div>
        
        {showActions && (
          <div className="flex gap-2">
            {appointment.type === "Video Call" && appointment.status === "confirmed" && (
              <Button size="sm">
                <Video className="h-4 w-4 mr-2" />
                Join Call
              </Button>
            )}
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Contact Clinic
            </Button>
            <Button variant="outline" size="sm">
              Reschedule
            </Button>
            <Button variant="destructive" size="sm">
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">HealHub</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/clinics" className="text-gray-700 hover:text-blue-600">Find Clinics</Link>
              <Link to="/appointments" className="text-blue-600 font-medium">My Appointments</Link>
              <Link to="/live" className="text-gray-700 hover:text-blue-600">Live Sessions</Link>
            </nav>
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <Link to="/clinics">
            <Button>Book New Appointment</Button>
          </Link>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-6">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming appointments</h3>
                  <p className="text-gray-500 mb-4">Book your first appointment to get started.</p>
                  <Link to="/clinics">
                    <Button>Find Clinics</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="mt-6">
            {pastAppointments.length > 0 ? (
              pastAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} showActions={false} />
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No past appointments</h3>
                  <p className="text-gray-500">Your appointment history will appear here.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Appointments;
