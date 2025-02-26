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
@Table(name = "Login")
@AllArgsConstructor
@NoArgsConstructor

public class Login {
    
    //Atributos Login
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long usuarioID;

    private String nombreUsuario;
    private String password;
    private String cargo;
}
