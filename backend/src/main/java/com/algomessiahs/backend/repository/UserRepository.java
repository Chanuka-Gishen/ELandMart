package com.algomessiahs.backend.repository;

import com.algomessiahs.backend.database.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository <User,Integer> {

}
