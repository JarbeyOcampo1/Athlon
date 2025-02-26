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
@Table(name = "Cliente")
@AllArgsConstructor
@NoArgsConstructor

public class Cliente {

    // Atributos Cliente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clienteID;

    private String nombreC;
    private String apellidoC;
    private String email;
    private String fechaRegistro;
    private String fechaVencimiento;
}
