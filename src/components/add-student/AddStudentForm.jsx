import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [newStudentForm, setNewStudentForm] = useState({
    basicInfo: {
      name: "",
      grade: "",
    },
    attendance: [{ date: "", status: "present" }],
    academics: [{ subject: "", grade: "" }]
  });

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setNewStudentForm(prev => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [name]: value
      }
    }));
  };

  const handleAttendanceChange = (index, field, value) => {
    setNewStudentForm(prev => ({
      ...prev,
      attendance: prev.attendance.map((record, i) => 
        i === index ? { ...record, [field]: value } : record
      )
    }));
  };

  const addAttendanceRecord = () => {
    setNewStudentForm(prev => ({
      ...prev,
      attendance: [...prev.attendance, { date: "", status: "present" }]
    }));
  };

  const removeAttendanceRecord = (index) => {
    setNewStudentForm(prev => ({
      ...prev,
      attendance: prev.attendance.filter((_, i) => i !== index)
    }));
  };

  const handleAcademicChange = (index, field, value) => {
    setNewStudentForm(prev => ({
      ...prev,
      academics: prev.academics.map((record, i) => 
        i === index ? { ...record, [field]: value } : record
      )
    }));
  };

  const addAcademicRecord = () => {
    setNewStudentForm(prev => ({
      ...prev,
      academics: [...prev.academics, { subject: "", grade: "" }]
    }));
  };

  const removeAcademicRecord = (index) => {
    setNewStudentForm(prev => ({
      ...prev,
      academics: prev.academics.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(newStudentForm);
    setNewStudentForm({
      basicInfo: { name: "", grade: "" },
      attendance: [{ date: "", status: "present" }],
      academics: [{ subject: "", grade: "" }]
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl mb-4">Add New Student</h2>

      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="font-semibold">Basic Information</h3>
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={newStudentForm.basicInfo.name}
            onChange={handleBasicInfoChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Grade:</label>
          <input
            type="text"
            name="grade"
            value={newStudentForm.basicInfo.grade}
            onChange={handleBasicInfoChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Attendance Records */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Attendance Records</h3>
          <button 
            type="button"
            onClick={addAttendanceRecord}
            className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          >
            Add Record
          </button>
        </div>
        {newStudentForm.attendance.map((record, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block mb-2">Date:</label>
              <input
                type="date"
                value={record.date}
                onChange={(e) => handleAttendanceChange(index, 'date', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2">Status:</label>
              <select
                value={record.status}
                onChange={(e) => handleAttendanceChange(index, 'status', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeAttendanceRecord(index)}
                className="bg-red-500 text-white px-2 py-1 rounded mt-6"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Academic Records */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Academic Records</h3>
          <button 
            type="button"
            onClick={addAcademicRecord}
            className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          >
            Add Subject
          </button>
        </div>
        {newStudentForm.academics.map((record, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block mb-2">Subject:</label>
              <input
                type="text"
                value={record.subject}
                onChange={(e) => handleAcademicChange(index, 'subject', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2">Grade:</label>
              <input
                type="text"
                value={record.grade}
                onChange={(e) => handleAcademicChange(index, 'grade', e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeAcademicRecord(index)}
                className="bg-red-500 text-white px-2 py-1 rounded mt-6"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;