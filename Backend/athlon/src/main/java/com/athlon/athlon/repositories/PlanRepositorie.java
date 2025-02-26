package com.athlon.athlon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.athlon.athlon.models.Plan;

public interface PlanRepositorie  extends JpaRepository <Plan, Long> {
    
    //Metodo para manejar la informacion de las facturas
}
