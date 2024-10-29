import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface GradesSectionProps {
  student: {
    name: string;
  };
}

const GradesSection: React.FC<GradesSectionProps> = ({ student }) => {
  const grades = [
    { subject: "Mathematics", grade: "A", trend: "up", percentage: 94 },
    { subject: "Science", grade: "A-", trend: "up", percentage: 91 },
    { subject: "English", grade: "B+", trend: "down", percentage: 88 },
    { subject: "History", grade: "A", trend: "up", percentage: 95 },
  ];

  return (
    <div className="col-span-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-black">Current Grades</h3>
        <button className="text-black hover:text-gray-700">View Full Report</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {grades.map((subject) => (
          <div key={subject.subject} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-black">{subject.subject}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-black">{subject.grade}</span>
                  <span className="text-gray-500">({subject.percentage}%)</span>
                </div>
              </div>
              {subject.trend === "up" ? (
                <TrendingUp className="w-5 h-5 text-[#f8d000]" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#f8d000] h-2 rounded-full" 
                style={{ width: `${subject.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-3 text-black">Recent Assignments</h4>
        <div className="space-y-2">
          {[
            { name: "Science Project", date: "Mar 15", grade: "95/100" },
            { name: "Math Quiz", date: "Mar 14", grade: "88/100" },
            { name: "English Essay", date: "Mar 12", grade: "92/100" }
          ].map((assignment) => (
            <div key={assignment.name} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
              <div>
                <p className="font-medium text-black">{assignment.name}</p>
                <p className="text-sm text-gray-500">{assignment.date}</p>
              </div>
              <span className="font-medium text-black">{assignment.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradesSection;