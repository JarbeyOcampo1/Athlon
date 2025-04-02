package com.athlon.athlon.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.athlon.athlon.models.Login;
import com.athlon.athlon.repositories.LoginRepositorie;

@RestController
@RequestMapping("/api/logins")
public class LoginController {

    @Autowired
    private LoginRepositorie loginRepositorie;

    //Obtener todos los logins
    @GetMapping
    public List <Login> getAllLogin () {
        return loginRepositorie.findAll ();
    }
    
    //obtener login por id
    @GetMapping("/{usuarioID}")
    public Login getLoginById (@PathVariable Long usuarioID) { 
        return loginRepositorie.findById(usuarioID).orElse(null);
    }

    //crear un login
    @PostMapping
    public Login createLogin (@RequestBody Login login) {
        return loginRepositorie.save(login);
    }

    //actualizar un login
    @PutMapping("/{usuarioID}")
    public Login updateLogin (@PathVariable Long usuarioID, @RequestBody Login login) {
        login.setUsuarioID(usuarioID);
        return loginRepositorie.save(login);
    }

    //eliminar un login
    @DeleteMapping("/{usuarioID}")
    public void deleteLogin (@PathVariable Long usuarioID) {
        loginRepositorie.deleteById(usuarioID);
    }

    //validar si el usuario existe en la base de datos
    @PostMapping("/validar")
    public ResponseEntity<String> validateLogin (@RequestBody Login login) {
        Login foundLogin = loginRepositorie.findByNombreUsuarioAndPassword(login.getNombreUsuario(),login.getPassword());

        if (foundLogin != null) {
            return ResponseEntity.status(HttpStatus.OK).body("Exito");
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error");
        }
    }
}
