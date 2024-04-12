package com.faculty.FacultyDashboard.controller;

import com.faculty.FacultyDashboard.entity.Faculty;
import com.faculty.FacultyDashboard.repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class FacultyController {

    @Autowired
    FacultyRepository repo;
    

    @GetMapping("/api")
    public  String api(){
        return "Hello World!!";
    }

    @GetMapping("/faculty")
    public List<Faculty> getFaculties(){
        List<Faculty> faculties = repo.findAll();
        if(faculties != null)
            return faculties;
        return  null;
    }

    @PostMapping("/faculty")
    public Faculty putFaculty(@RequestBody Faculty faculty){
        return repo.save(faculty);
    }


    @GetMapping("/login")
    public Object login(@RequestHeader Object obj){

        return null;
    }

//    @GetMapping("/error")
//    public String error(){
//        return "Some internal Error";
//    }
}
