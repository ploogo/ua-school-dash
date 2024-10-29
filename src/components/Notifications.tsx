import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationsProps {
  student: {
    name: string;
  };
}

const Notifications: React.FC<NotificationsProps> = ({ student }) => {
  const notifications = [
    {
      type: "assignment",
      message: "Math homework due tomorrow",
      time: "2 hours ago",
      priority: "high"
    },
    {
      type: "event",
      message: "Parent-Teacher conference next week",
      time: "5 hours ago",
      priority: "medium"
    },
    {
      type: "grade",
      message: "New grade posted in Science",
      time: "1 day ago",
      priority: "medium"
    }
  ];

  return (
    <div className="col-span-6 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-black">Recent Notifications</h3>
        <button className="text-black hover:text-gray-700">View All</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div 
            key={index}
            className={`flex items-start gap-4 p-3 rounded-lg ${
              notification.priority === 'high' ? 'bg-red-50' : 'hover:bg-gray-50'
            }`}
          >
            <div className={`
              flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
              ${notification.priority === 'high' ? 'bg-red-100' : 'bg-[#f8d000]'}
            `}>
              <Bell className={`w-4 h-4 ${
                notification.priority === 'high' ? 'text-red-600' : 'text-black'
              }`} />
            </div>
            <div>
              <p className="font-medium text-black">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-black">Notification Settings</h4>
          <div className="space-y-2">
            {["Assignments", "Grades", "Events", "Announcements"].map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f8d000] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#f8d000]"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;