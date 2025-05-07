import React, { useState } from 'react';
import axios from 'axios';

function AddPatientForm() {
  const [formData, setFormData] = useState({
    patientID: '',
    name: '',
    surname: '',
    number: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/patients', formData)
      .then(res => {
        console.log('Patient added:', res.data);
        alert('Patient added!');
      })
      .catch(err => {
        console.error('Error adding patient:', err);
        alert('Error!');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="patientID" placeholder="Patient ID" onChange={handleChange} required />
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="surname" placeholder="Surname" onChange={handleChange} required />
      <input name="number" placeholder="Phone Number" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <button type="submit">Add Patient</button>
    </form>
  );
}

export default AddPatientForm;
