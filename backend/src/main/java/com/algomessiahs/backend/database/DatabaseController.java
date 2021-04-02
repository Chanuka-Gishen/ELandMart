package com.algomessiahs.backend.database;

import com.algomessiahs.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DatabaseController {

    @Autowired
    private UserRepository userRepo;
    private MongoTemplate mongoTemplate;
    private User user;

    @PostMapping("/Save")
    public void saveUser(@RequestBody User user){
        userRepo.save(user);
    }

    @GetMapping("/findAllUsers")
    public List<User> getUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/getUser/{userName}")
    public boolean getUser(@PathVariable String userName){
        Query findUser = new Query().addCriteria(Criteria.where("UserName").is(userName));
        
        return true;
    }


}
