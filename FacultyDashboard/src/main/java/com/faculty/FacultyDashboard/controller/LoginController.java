package com.faculty.FacultyDashboard.controller;

import com.faculty.FacultyDashboard.entity.GoogleData;
import com.faculty.FacultyDashboard.jwt.JwtService;
import com.faculty.FacultyDashboard.repository.FacultyRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping(path = "/login/")
public class LoginController {

    @Autowired
    FacultyRepository repo;

    private final JwtService jwtService;

    @Autowired
    public LoginController(JwtService jwtService){
        this.jwtService = jwtService;
    }

    @GetMapping()
    public ResponseEntity<?> login(@RequestHeader("Authorization") String auth){
        try{
            RestTemplate restTemplate = new RestTemplate();
            String url = "https://oauth2.googleapis.com/tokeninfo?id_token="+auth;
            ResponseEntity<GoogleData> response = restTemplate.getForEntity(url, GoogleData.class);
            if(response.getStatusCode() != HttpStatus.OK){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
            };
            String token = jwtService.print(response.getBody());
            System.out.println(token);
            if(token.equals("notfound")){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
            }
            return ResponseEntity.ok().body(token);
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("auth/")
    public ResponseEntity<?> verifyToke(@RequestHeader("Authorization") String auth){
        try{
            Claims data = jwtService.data(auth);
            if(data.isEmpty()){
                return ResponseEntity.status(401).body("Invalid Token");
            }
            return ResponseEntity.ok().body(data);
        }catch(Exception e){
            return ResponseEntity.status(401).body("Invalid Token");
        }
    }
}
