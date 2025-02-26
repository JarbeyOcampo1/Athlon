package com.athlon.athlon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.athlon.athlon.models.Cliente;

public interface ClienteRepositorie  extends JpaRepository <Cliente, Long> {

    //Metodo para manejar la informacion de los clientes
}
