package com.athlon.athlon.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "Factura")
@AllArgsConstructor
@NoArgsConstructor

public class Factura {
    
    //Atributos Factura
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long facturaID;

    private String fechaFactura;
    private String fechaVencimiento;
    private String precio;

    //Relacion con cliente (muchos a uno)
    @ManyToOne
    @JoinColumn(name="clienteid", referencedColumnName = "clienteID")
    private Cliente clienteID;

    //Relacion con planes (muchos a uno)
    @ManyToOne
    @JoinColumn(name="planid", referencedColumnName = "planID")
    private Plan planID;
}
