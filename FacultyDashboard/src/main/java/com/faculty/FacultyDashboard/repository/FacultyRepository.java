package com.faculty.FacultyDashboard.repository;

import com.faculty.FacultyDashboard.entity.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FacultyRepository extends JpaRepository<Faculty, Integer> {

}
