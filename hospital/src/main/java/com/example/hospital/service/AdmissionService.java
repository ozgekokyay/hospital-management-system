package com.example.hospital.service;

import com.example.hospital.entity.Admission;
import com.example.hospital.repository.AdmissionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdmissionService {
    private final AdmissionRepository repo;

    public AdmissionService(AdmissionRepository repo) {
        this.repo = repo;
    }

    public Admission save(Admission admission) {
        return repo.save(admission);
    }

    public List<Admission> getAll() {
        return repo.findAll();
    }

    public void deleteById(int id) {
        repo.deleteById(id);
    }
}