package com.faculty.FacultyDashboard.controller;

import com.faculty.FacultyDashboard.entity.Faculty;
import com.faculty.FacultyDashboard.entity.GoogleData;
import com.faculty.FacultyDashboard.jwt.JwtService;
import com.faculty.FacultyDashboard.repository.FacultyRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;


@RestController
@RequestMapping(path = "/login/")
public class LoginController {

    private static final Logger log = LoggerFactory.getLogger(LoginController.class);
    private final FacultyRepository facultyRepository;
    private final JwtService jwtService;

    @Autowired
    public LoginController(JwtService jwtService, FacultyRepository facultyRepository) {
        this.jwtService = jwtService;
        this.facultyRepository = facultyRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping()
    public ResponseEntity<?> login(@RequestHeader("Authorization") String auth){
        try{
            RestTemplate restTemplate = new RestTemplateBuilder()
                    .setConnectTimeout(Duration.ofMillis(10000))
                    .setReadTimeout(Duration.ofMillis(10000))
                    .build();
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
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("Something went wrong");
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
