package com.athlon.athlon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.athlon.athlon.models.Login;

public interface LoginRepositorie  extends JpaRepository <Login, Long> {
    //Metodo para manejar la informacion de las facturas
    
    //Metodo para buscar un usuario y contraseña del login
    Login findByNombreUsuarioAndPassword (String nombreUsuario, String password);
}
