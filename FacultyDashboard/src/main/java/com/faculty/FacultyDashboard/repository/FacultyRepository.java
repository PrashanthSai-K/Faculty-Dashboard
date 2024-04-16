package com.faculty.FacultyDashboard.repository;

import com.faculty.FacultyDashboard.entity.Faculty;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface FacultyRepository extends JpaRepository<Faculty, Integer> {

    @Query(value = "SELECT * FROM faculty WHERE email = ?1", nativeQuery = true)
    Faculty findByEmail(String email);

}
