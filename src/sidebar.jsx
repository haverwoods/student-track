import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 w-64">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul>
        <li
          className="mb-2 p-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => onSelect('viewStudents')}
        >
          View Students
        </li>
        <li
          className="mb-2 p-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => onSelect('addStudent')}
        >
          Add Student
        </li>
        <li
          className="mb-2 p-2 hover:bg-gray-700 cursor-pointer"
          onClick={() => onSelect('editStudent')}
        >
          Edit Student
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
