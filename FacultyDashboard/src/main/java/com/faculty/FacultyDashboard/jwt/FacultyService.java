package com.faculty.FacultyDashboard.jwt;

import com.faculty.FacultyDashboard.entity.Faculty;
import com.faculty.FacultyDashboard.repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import java.security.PrivateKey;
import java.util.List;


@Service
public class FacultyService {

    private final FacultyRepository repository;

    @Autowired
    public FacultyService(FacultyRepository facultyRepository){
        this.repository = facultyRepository;
    }

    public Faculty verifyUser(String email){
        return repository.findByEmail(email);
    }
}
