package com.example.hospital.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "exam_type")
@Data
public abstract class Examination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int basePrice;
    public abstract int cost();
    public abstract String addOperation();
}