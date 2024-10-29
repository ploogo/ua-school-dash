import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Award, 
  Download,
  ChevronDown,
  BookOpen,
  Clock,
  Target,
  AlertCircle
} from 'lucide-react';

interface Student {
  id: number;
  name: string;
  grade: string;
  subjects: {
    name: string;
    grades: number[];
    average: number;
    trend: 'up' | 'down' | 'stable';
  }[];
  attendance: {
    present: number;
    absent: number;
    late: number;
    total: number;
  };
  behavior: {
    positive: number;
    needsImprovement: number;
    date: string;
    description: string;
  }[];
}

const ReportsPage: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('Quarter 3');

  const students: Student[] = [
    {
      id: 0,
      name: "Emma Thompson",
      grade: "8th Grade",
      subjects: [
        {
          name: "Mathematics",
          grades: [95, 88, 92, 96],
          average: 92.75,
          trend: 'up'
        },
        {
          name: "Science",
          grades: [90, 92, 88, 94],
          average: 91,
          trend: 'up'
        },
        {
          name: "English",
          grades: [87, 85, 88, 86],
          average: 86.5,
          trend: 'stable'
        },
        {
          name: "History",
          grades: [94, 92, 90, 88],
          average: 91,
          trend: 'down'
        }
      ],
      attendance: {
        present: 45,
        absent: 2,
        late: 1,
        total: 48
      },
      behavior: [
        {
          positive: true,
          needsImprovement: false,
          date: "2024-03-15",
          description: "Helped classmates during group work"
        },
        {
          positive: true,
          needsImprovement: false,
          date: "2024-03-10",
          description: "Excellent participation in class discussion"
        }
      ]
    },
    {
      id: 1,
      name: "Lucas Thompson",
      grade: "5th Grade",
      subjects: [
        {
          name: "Mathematics",
          grades: [88, 85, 90, 92],
          average: 88.75,
          trend: 'up'
        },
        {
          name: "Science",
          grades: [92, 94, 95, 96],
          average: 94.25,
          trend: 'up'
        },
        {
          name: "English",
          grades: [85, 88, 86, 89],
          average: 87,
          trend: 'up'
        },
        {
          name: "History",
          grades: [90, 88, 92, 90],
          average: 90,
          trend: 'stable'
        }
      ],
      attendance: {
        present: 46,
        absent: 1,
        late: 1,
        total: 48
      },
      behavior: [
        {
          positive: true,
          needsImprovement: false,
          date: "2024-03-14",
          description: "Outstanding science project presentation"
        }
      ]
    }
  ];

  const periods = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];
  const currentStudent = students[selectedStudent];

  const getGradeColor = (average: number) => {
    if (average >= 90) return 'text-green-500';
    if (average >= 80) return 'text-blue-500';
    if (average >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />;
      default:
        return <div className="w-4 h-4 border-t-2 border-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {students.map((student) => (
            <button
              key={student.id}
              onClick={() => setSelectedStudent(student.id)}
              className={`px-4 py-2 rounded-lg ${
                selectedStudent === student.id
                  ? 'bg-black text-[#f8d000]'
                  : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              {student.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#f8d000]"
            >
              {periods.map((period) => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900">
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Academic Performance */}
        <div className="col-span-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-black flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Academic Performance
            </h3>
            <span className="text-sm text-gray-500">{selectedPeriod}</span>
          </div>
          
          <div className="space-y-6">
            {currentStudent.subjects.map((subject) => (
              <div key={subject.name} className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    <h4 className="font-medium text-black">{subject.name}</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${getGradeColor(subject.average)}`}>
                      {subject.average}%
                    </span>
                    {getTrendIcon(subject.trend)}
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {subject.grades.map((grade, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded text-center">
                      <div className="text-sm text-gray-500">Week {index + 1}</div>
                      <div className={`font-medium ${getGradeColor(grade)}`}>{grade}%</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="col-span-4 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5" />
              Attendance
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-green-700">Present</span>
                </div>
                <span className="font-medium text-green-700">{currentStudent.attendance.present} days</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-700">Absent</span>
                </div>
                <span className="font-medium text-red-700">{currentStudent.attendance.absent} days</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-700">Late</span>
                </div>
                <span className="font-medium text-yellow-700">{currentStudent.attendance.late} days</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-sm text-gray-500">Attendance Rate</div>
                <div className="text-2xl font-bold text-black">
                  {Math.round((currentStudent.attendance.present / currentStudent.attendance.total) * 100)}%
                </div>
              </div>
            </div>
          </div>

          {/* Behavior Notes */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-black flex items-center gap-2 mb-6">
              <Target className="w-5 h-5" />
              Behavior Notes
            </h3>
            
            <div className="space-y-4">
              {currentStudent.behavior.map((note, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">
                      {new Date(note.date).toLocaleDateString()}
                    </span>
                    <Award className={`w-4 h-4 ${note.positive ? 'text-[#f8d000]' : 'text-red-500'}`} />
                  </div>
                  <p className="text-sm text-gray-700">{note.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;