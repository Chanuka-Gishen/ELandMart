package com.algomessiahs.backend.database;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@Document(collection = "UserDetails")
public class User {

    @Id
    private int Id;
    private String UserName;
    private String Email;
    private String Password;

}
