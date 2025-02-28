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
import com.athlon.athlon.models.Factura;
import com.athlon.athlon.repositories.FacturaRepsitorie;

@RestController
@RequestMapping("/api/facturas")
public class FacturaController {
    
    @Autowired
    private FacturaRepsitorie facturaRepsitorie;

    //Obtener todas las facturas
    @GetMapping
    public List <Factura> getAllFacturas () {
        return facturaRepsitorie.findAll();
    }

    //Obtener una factura por id
    @GetMapping("/{facturaID}")
    public Factura getFacturaById (@PathVariable Long facturaID) {
        return facturaRepsitorie.findById(facturaID).orElse(null);
    }

    //crear una factura
    @PostMapping 
    public Factura createFactura (@RequestBody Factura factura) {
        return facturaRepsitorie.save(factura);
    }

    //actualizar una factura
    @PutMapping("/{facturaID}")
    public Factura updateFactura(@PathVariable Long facturaID, @RequestBody Factura factura) {
        factura.setFacturaID(facturaID);
        return facturaRepsitorie.save(factura);
    }

    //eliminar una factura
    @DeleteMapping("/{facturaID}")
    public void deleteFactura (@PathVariable Long facturaID) {
        facturaRepsitorie.deleteById(facturaID);
    }

}
