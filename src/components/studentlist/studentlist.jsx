import React from 'react';

const StudentList = ({ students, onDeleteStudent }) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Students List</h2>
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="border p-4 rounded">
            <h3 className="font-bold">{student.name}</h3>
            <p>Grade: {student.grade}</p>
            
            {/* Attendance Summary */}
            <div className="mt-2">
              <h4 className="font-semibold">Attendance Records:</h4>
              {student.attendance.map((record, index) => (
                <p key={index}>
                  {record.date}: {record.status}
                </p>
              ))}
            </div>

            {/* Academic Summary */}
            <div className="mt-2">
              <h4 className="font-semibold">Academic Records:</h4>
              {student.academics.map((record, index) => (
                <p key={index}>
                  {record.subject}: {record.grade}
                </p>
              ))}
            </div>

            <button 
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => onDeleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;