package com.example.hospital.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
    @Id
    private Integer patientID;
    private String name;
    private String surname;
    private String phoneNumber;
    private String address;
}
