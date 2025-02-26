package com.athlon.athlon.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.athlon.athlon.models.Cliente;
import com.athlon.athlon.repositories.ClienteRepositorie;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
    
    @Autowired
    private ClienteRepositorie clienteRepositorie;

    //Obtener todos los clientes
    @GetMapping
    public List<Cliente> getAllClients(){
        return clienteRepositorie.findAll();
    }
    
    //Obtener un cliente por id
    @GetMapping("/{clienteID}")
    public Cliente getClientById (@PathVariable Long clienteID) {
        return clienteRepositorie.findById(clienteID).orElse(null);
    }

    //Crear un cliente
    @PostMapping
    public Cliente CreateClient(@RequestBody Cliente cliente) {
        return clienteRepositorie.save(cliente);
    }

    //Actualizar un cliente
    @PutMapping("/{clienteID}")
    public Cliente updateClient (@PathVariable Long clienteID, @RequestBody Cliente cliente) {
        cliente.setClienteID(clienteID);
        return clienteRepositorie.save(cliente);
    }

    //Eliminar un cliente
    @DeleteMapping("/{clienteID}")
    public void deleteCLiente(@PathVariable Long clienteID) {
        clienteRepositorie.deleteById(clienteID);
    }
}

