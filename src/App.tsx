import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Calendar as CalendarIcon, 
  DollarSign, 
  Bell, 
  BookOpen,
  Activity,
  MessageSquare,
  Settings
} from 'lucide-react';
import StudentProfile from './components/StudentProfile';
import GradesSection from './components/GradesSection';
import LunchBalance from './components/LunchBalance';
import EventCalendar from './components/Calendar';
import Notifications from './components/Notifications';
import MessagesPage from './components/MessagesPage';
import CalendarPage from './components/CalendarPage';
import ReportsPage from './components/ReportsPage';

function App() {
  const [activeStudent, setActiveStudent] = useState(0);
  const [activePage, setActivePage] = useState('Dashboard');
  
  const students = [
    {
      id: 0,
      name: "Emma Thompson",
      grade: "8th Grade",
      avatar: "https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=400&auto=format&fit=crop&q=60",
      lunchBalance: 45.50,
      gpa: 3.8,
      activities: ["Soccer", "Chess Club"],
      upcomingEvents: [
        { date: "2024-03-20", event: "Parent-Teacher Conference" },
        { date: "2024-03-22", event: "Soccer Match vs. Lincoln Middle School" }
      ]
    },
    {
      id: 1,
      name: "Lucas Thompson",
      grade: "5th Grade",
      avatar: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&auto=format&fit=crop&q=60",
      lunchBalance: 32.25,
      gpa: 3.5,
      activities: ["Band", "Science Club"],
      upcomingEvents: [
        { date: "2024-03-21", event: "Band Concert" },
        { date: "2024-03-25", event: "Science Fair" }
      ]
    }
  ];

  const renderContent = () => {
    switch (activePage) {
      case 'Messages':
        return <MessagesPage />;
      case 'Calendar':
        return <CalendarPage />;
      case 'Reports':
        return <ReportsPage />;
      case 'Dashboard':
      default:
        return (
          <>
            {/* Student Selector */}
            <div className="flex gap-4 mb-8">
              {students.map((student) => (
                <button
                  key={student.id}
                  onClick={() => setActiveStudent(student.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    activeStudent === student.id ? 'bg-[#f8d000] border-2 border-black' : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="text-left">
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.grade}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-12 gap-6">
              <StudentProfile student={students[activeStudent]} />
              <GradesSection student={students[activeStudent]} />
              <LunchBalance student={students[activeStudent]} />
              <EventCalendar student={students[activeStudent]} />
              <Notifications student={students[activeStudent]} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-black text-white p-4">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="w-8 h-8 text-[#f8d000]" />
          <h1 className="text-xl font-bold">Parent Portal</h1>
        </div>
        
        <nav className="space-y-2">
          {["Dashboard", "Messages", "Calendar", "Reports", "Settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`flex items-center gap-2 w-full p-2 hover:bg-gray-900 rounded-lg ${
                activePage === item ? 'bg-[#f8d000] text-black' : ''
              }`}
            >
              {item === "Dashboard" && <Users className="w-5 h-5" />}
              {item === "Messages" && <MessageSquare className="w-5 h-5" />}
              {item === "Calendar" && <CalendarIcon className="w-5 h-5" />}
              {item === "Reports" && <BookOpen className="w-5 h-5" />}
              {item === "Settings" && <Settings className="w-5 h-5" />}
              {item}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-900 p-3 rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-300">Contact support at:</p>
            <p className="text-sm text-gray-300">support@school.edu</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-black">Welcome, Thompson Family</h2>
            <p className="text-gray-600">Here's what's happening with your children</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-[#f8d000] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default App;