package com.example.hospital.service;

import com.example.hospital.entity.Patient;
import com.example.hospital.repository.PatientRepository;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PatientService {
    private final PatientRepository repo;

    public PatientService(PatientRepository repo) {
        this.repo = repo;
    }

    public Patient save(Patient p) { return repo.save(p); }
    public List<Patient> getAll() { return repo.findAll(); }
    public void deleteById(int id) { repo.deleteById(id); }
}
