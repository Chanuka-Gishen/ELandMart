package com.algomessiahs.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoanCalculator {

    @GetMapping("/getLoanAmount")
    private String getLoanCal(){

        return String.valueOf(10);
    }

}
