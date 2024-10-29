import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users, Calendar as CalendarIcon } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'academic' | 'sports' | 'activity' | 'meeting';
  student: string;
}

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week'>('month');

  const events: Event[] = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2024-03-20",
      time: "15:00",
      location: "Room 204",
      type: "meeting",
      student: "Emma Thompson"
    },
    {
      id: 2,
      title: "Soccer Match vs Lincoln",
      date: "2024-03-22",
      time: "16:30",
      location: "School Field",
      type: "sports",
      student: "Emma Thompson"
    },
    {
      id: 3,
      title: "Band Concert",
      date: "2024-03-21",
      time: "18:00",
      location: "Auditorium",
      type: "activity",
      student: "Lucas Thompson"
    },
    {
      id: 4,
      title: "Science Fair",
      date: "2024-03-25",
      time: "14:00",
      location: "Gymnasium",
      type: "academic",
      student: "Lucas Thompson"
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getEventsByDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'academic': return 'bg-blue-500';
      case 'sports': return 'bg-green-500';
      case 'activity': return 'bg-purple-500';
      case 'meeting': return 'bg-[#f8d000]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-gray-50 rounded-xl overflow-hidden">
      {/* Calendar Grid */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-black">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setView('month')}
                className={`px-4 py-2 text-sm ${
                  view === 'month' ? 'bg-[#f8d000] text-black' : 'text-white'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setView('week')}
                className={`px-4 py-2 text-sm ${
                  view === 'week' ? 'bg-[#f8d000] text-black' : 'text-white'
                }`}
              >
                Week
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900">
              <Plus className="w-4 h-4" />
              Add Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-white p-4 text-center text-sm font-medium text-gray-600">
              {day}
            </div>
          ))}
          
          {getDaysInMonth(currentDate).map((date, index) => (
            <div
              key={index}
              className={`bg-white min-h-[120px] p-2 ${
                date && date.toDateString() === selectedDate.toDateString()
                  ? 'ring-2 ring-[#f8d000]'
                  : ''
              }`}
              onClick={() => date && setSelectedDate(date)}
            >
              {date && (
                <>
                  <span className={`text-sm ${
                    date.toDateString() === new Date().toDateString()
                      ? 'bg-[#f8d000] text-black w-6 h-6 rounded-full flex items-center justify-center'
                      : 'text-gray-600'
                  }`}>
                    {date.getDate()}
                  </span>
                  <div className="mt-1 space-y-1">
                    {getEventsByDate(date).map((event) => (
                      <div
                        key={event.id}
                        className="text-xs p-1 rounded truncate"
                        style={{ backgroundColor: getEventTypeColor(event.type) + '20' }}
                      >
                        <span className={`w-2 h-2 inline-block rounded-full mr-1 ${getEventTypeColor(event.type)}`}></span>
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Event Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-black">Events</h3>
          <div className="flex gap-2">
            {['academic', 'sports', 'activity', 'meeting'].map((type) => (
              <div
                key={type}
                className={`w-3 h-3 rounded-full ${getEventTypeColor(type as Event['type'])}`}
                title={type.charAt(0).toUpperCase() + type.slice(1)}
              ></div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {events
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((event) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg ${
                  new Date(event.date).toDateString() === selectedDate.toDateString()
                    ? 'bg-[#f8d000] bg-opacity-10'
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-black">{event.title}</h4>
                  <span
                    className={`w-2 h-2 rounded-full ${getEventTypeColor(event.type)}`}
                  ></span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.student}</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;