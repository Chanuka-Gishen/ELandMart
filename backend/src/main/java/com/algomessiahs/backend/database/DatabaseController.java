package com.algomessiahs.backend.database;

import com.algomessiahs.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DatabaseController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/Save")
    public String saveUser(@RequestBody User user){
        userRepo.save(user);
        return "User Saved Successfully";
    }

    @GetMapping("/findAllUsers")
    public List<User> getUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/getUser/{id}")
    public Optional<User> getUser(@PathVariable int id){
        return userRepo.findById(id);
    }


}
