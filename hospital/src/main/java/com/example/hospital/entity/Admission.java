package com.example.hospital.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admission {
    @Id
    private Integer admissionID;
    private Integer patientID;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Examination> examinations = new ArrayList<>();
}
