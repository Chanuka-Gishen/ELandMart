package com.algomessiahs.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoanCalculator {

    @GetMapping("/test/{price}/{intrest}/{installment}")
    public float testAPi(@PathVariable String price, @PathVariable String intrest, @PathVariable String installment){
        float Price = Integer.parseInt(price);
        float Intrest = Integer.parseInt(intrest);
        float Instalments = Integer.parseInt(installment);
        float output = ((Price/100)*(100+Intrest)/Instalments);
        return output;
    }

}
