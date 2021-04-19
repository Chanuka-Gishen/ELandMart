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

    @GetMapping("/test/{price}/{intrest}/{installment}")
    public float testAPi(@PathVariable String price, @PathVariable String intrest, @PathVariable String installment){
        float Price = Integer.parseInt(price);
        float Intrest = Integer.parseInt(intrest);
        float Instalments = Integer.parseInt(installment);
        float output = ((Price/100)*(100+Intrest)/Instalments);
        return output;
    }


}
