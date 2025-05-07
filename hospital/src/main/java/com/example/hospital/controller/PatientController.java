package com.example.hospital.controller;

import com.example.hospital.entity.Patient;
import com.example.hospital.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {
    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
        System.out.println("PatientController initialized");

    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient p) {
        return service.save(p);
    }

    @GetMapping
    public List<Patient> list() {
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deleteById(id);
    }
}
