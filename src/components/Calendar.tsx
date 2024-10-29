import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  student: {
    name: string;
    upcomingEvents: Array<{
      date: string;
      event: string;
    }>;
  };
}

const Calendar: React.FC<CalendarProps> = ({ student }) => {
  return (
    <div className="col-span-6 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-black">Upcoming Events</h3>
        <button className="text-black hover:text-gray-700">View Calendar</button>
      </div>

      <div className="space-y-4">
        {student.upcomingEvents.map((event, index) => {
          const date = new Date(event.date);
          const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          });

          return (
            <div key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f8d000] rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs text-black">{formattedDate.split(' ')[0]}</span>
                <span className="text-lg font-bold text-black">{formattedDate.split(' ')[1]}</span>
              </div>
              <div>
                <h4 className="font-medium text-black">{event.event}</h4>
                <p className="text-sm text-gray-500">
                  {date.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <button className="flex items-center justify-center gap-2 w-full p-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900 transition-colors">
          <CalendarIcon className="w-4 h-4" />
          Add to Calendar
        </button>
      </div>
    </div>
  );
};

export default Calendar;