package com.athlon.athlon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.athlon.athlon.models.Factura;

public interface FacturaRepsitorie  extends JpaRepository <Factura, Long> {

    //Metodo para manejar la informacion de las facturas   
}
