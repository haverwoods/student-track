import React, { useState, useEffect } from 'react';
import StudentList from '../studentlist/studentlist';
import AddStudentForm from '../add-student/AddStudentForm';

const STORAGE_KEY = 'studentManagementSystem';

const StudentManagementSystem = () => {
  const [students, setStudents] = useState(() => {
    // Load or fetch students from localStorage 
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData).students : [];
  });
  const [view, setView] = useState('list');

  //  save data to localStorage
  const saveToLocalStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleAddStudent = (newStudentForm) => {
    const newStudent = {
      id: Date.now(), 
      name: newStudentForm.basicInfo.name,
      grade: newStudentForm.basicInfo.grade,
      attendance: newStudentForm.attendance,
      academics: newStudentForm.academics
    };
    setStudents(prevStudents => {
      const updatedStudents = [...prevStudents, newStudent];
      saveToLocalStorage({ students: updatedStudents });
      return updatedStudents;
    });
    setView('list');
  };

  const handleDeleteStudent = (id) => {
    setStudents(prevStudents => {
      const updatedStudents = prevStudents.filter(student => student.id !== id);
      saveToLocalStorage({ students: updatedStudents });
      return updatedStudents;
    });
  };

  const handleClearAllData = () => {
    setStudents([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Management System</h1>
      
      {/* Navigation */}
      <div className="mb-4 flex gap-2">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setView('list')}
        >
          View Students
        </button>
        <button 
          className="bg-green-400 text-white px-4 py-2 rounded"
          onClick={() => setView('add')}
        >
          Add New Student
        </button>
        <button 
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleClearAllData}
        >
          Clear All Data
        </button>
      </div>

      {/* Main content area */}
      <div className="bg-white p-4 rounded shadow">
        {view === 'list' && (
          <StudentList 
            students={students} 
            onDeleteStudent={handleDeleteStudent} 
          />
        )}
        {view === 'add' && (
          <AddStudentForm onAddStudent={handleAddStudent} />
        )}
      </div>
    </div>
  );
};

export default StudentManagementSystem;