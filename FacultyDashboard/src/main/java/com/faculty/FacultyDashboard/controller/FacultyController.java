package com.faculty.FacultyDashboard.controller;

import com.faculty.FacultyDashboard.entity.Faculty;
import com.faculty.FacultyDashboard.repository.FacultyRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/faculty")
public class FacultyController {

    @Autowired
    FacultyRepository repo;

    @GetMapping("/api")
    public  String api(){
        return "Hello World!!";
    }

    @GetMapping("/")
    public ResponseEntity<?> getFaculties(HttpServletRequest request){
        String role = (String) request.getAttribute("role");
        if(role != "admin"){
            return ResponseEntity.badRequest().body("Not Authorized");
        }
        List<Faculty> faculties = repo.findAll();
        return  ResponseEntity.ok().body(faculties);
    }

    @PostMapping("/")
    public Faculty putFaculty(@RequestBody Faculty faculty){
        return repo.save(faculty);
    }

    @GetMapping("/data")
    public String data(){
        return "called";
    }

//    @GetMapping("/login")
//    public ResponseEntity<String> login(@RequestHeader("Authorization") String auth){
//        RestTemplate restTemplate = new RestTemplate();
//        String url = "https://oauth2.googleapis.com/tokeninfo?id_token="+auth;
//        return restTemplate.getForEntity(url, String.class);
//    }

}
