package com.example.hospital.controller;

import com.example.hospital.entity.Admission;
import com.example.hospital.service.AdmissionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admissions")
@CrossOrigin(origins = "http://localhost:3000")
public class AdmissionController {
    private final AdmissionService service;

    public AdmissionController(AdmissionService service) {
        this.service = service;
    }

    @PostMapping
    public Admission create(@RequestBody Admission admission) {
        return service.save(admission);
    }

    @GetMapping
    public List<Admission> list() {
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deleteById(id);
    }
}
