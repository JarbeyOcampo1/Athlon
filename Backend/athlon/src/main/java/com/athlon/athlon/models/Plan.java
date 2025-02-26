package com.athlon.athlon.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "Plan")
@AllArgsConstructor
@NoArgsConstructor

public class Plan {
    
    //Atributos Plan
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planID;

    private String nombrePlan;
    private String duracion;
    private String descripcion;
    private String precio;
}
