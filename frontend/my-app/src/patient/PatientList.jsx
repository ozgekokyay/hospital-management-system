import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/patients")
      .then(res => setPatients(res.data))
      .catch(err => console.error("Error fetching patients:", err));
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.patientID}>
            {patient.name} {patient.surname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
