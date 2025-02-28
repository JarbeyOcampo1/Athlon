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
import com.athlon.athlon.models.Plan;
import com.athlon.athlon.repositories.PlanRepositorie;

@RestController
@RequestMapping("/api/planes")
public class PlanController {

    @Autowired
    private PlanRepositorie planRepositorie;

    //Obtener todos los planes
    @GetMapping
    public List <Plan> getAllPlans () {
        return planRepositorie.findAll();
    }

    //Obtener un plan por id
    @GetMapping("/{planID}")
    public Plan getPlanById (@PathVariable Long planID) {
        return planRepositorie.findById(planID).orElse(null);
    }
    
    //crear un plan
    @PostMapping
    public Plan CreatePlan (@RequestBody Plan plan) {
        return planRepositorie.save(plan);
    }
    
    //actualizar plan 
    @PutMapping("/{planID}")
    public Plan updatePlan (@PathVariable Long planID, @RequestBody Plan plan) {
        plan.setPlanID(planID);
        return planRepositorie.save(plan);
    }

    //Eliminar plan 
    @DeleteMapping("/{planID}")
    public void deletePlan (@PathVariable Long planID) {
        planRepositorie.deleteById(planID);
    }

}
