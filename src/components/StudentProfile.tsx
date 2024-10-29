import React from 'react';
import { Activity, BookOpen, Users } from 'lucide-react';

interface StudentProfileProps {
  student: {
    name: string;
    grade: string;
    avatar: string;
    activities: string[];
    gpa: number;
  };
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <div className="col-span-4 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        <img 
          src={student.avatar} 
          alt={student.name} 
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-bold text-black">{student.name}</h3>
          <p className="text-gray-600">{student.grade}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f8d000] text-black">
              GPA: {student.gpa}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3 flex items-center gap-2 text-black">
          <Activity className="w-4 h-4" />
          Activities
        </h4>
        <div className="flex flex-wrap gap-2">
          {student.activities.map((activity) => (
            <span 
              key={activity}
              className="px-3 py-1 bg-black text-[#f8d000] rounded-full text-sm"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 p-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900 transition-colors">
          <BookOpen className="w-4 h-4" />
          View Schedule
        </button>
        <button className="flex items-center justify-center gap-2 p-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900 transition-colors">
          <Users className="w-4 h-4" />
          Contact Teachers
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;