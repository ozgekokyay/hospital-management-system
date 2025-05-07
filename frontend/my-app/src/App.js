import React from 'react';
import AddPatientForm from './patient/AddPatientForm';
import PatientList from './patient/PatientList';
import AdmissionList from './admission/AdmissionList';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/patients/add" element={<AddPatientForm />} />
          <Route path="/admissions" element={<AdmissionList />} />
        </Routes>
    </Router>
  );
}

export default App;