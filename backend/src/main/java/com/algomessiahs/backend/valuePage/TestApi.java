package com.algomessiahs.backend.valuePage;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TestApi {

    @RequestMapping("/api")
    public String testApi(){
        return "Hello";
    }
}
