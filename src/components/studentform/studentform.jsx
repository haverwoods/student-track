import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, editStudent, selectedStudent }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [fees, setFees] = useState('');

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setCourse(selectedStudent.course);
      setFees(selectedStudent.fees);
    } else {
      setName('');
      setCourse('');
      setFees('');
    }
  }, [selectedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      editStudent({ name, course, fees });
    } else {
      addStudent({ name, course, fees });
    }
    setName('');
    setCourse('');
    setFees('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {selectedStudent ? 'Edit Student' : 'Add Student'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Fees"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {selectedStudent ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
