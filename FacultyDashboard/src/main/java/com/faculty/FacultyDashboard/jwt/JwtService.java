package com.faculty.FacultyDashboard.jwt;

import com.faculty.FacultyDashboard.entity.Faculty;
import com.faculty.FacultyDashboard.entity.GoogleData;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwe;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.swing.text.html.StyleSheet;
import java.security.Key;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    private final SecretKey key = Jwts.SIG.HS256.key().build();
    private final FacultyService facultyService ;

    @Autowired
    public JwtService(FacultyService facultyService){
        this.facultyService = facultyService;
    }

    public String print(GoogleData response){
        try{
            String email = response.getEmail();
            Faculty faculty = facultyService.verifyUser(email);
            if(faculty == null){
                return "notfound";
            }
            Map<String, Object> map = new HashMap<>();
            map.put("email", faculty.getEmail());
            map.put("name", faculty.getName());
            map.put("picture", response.getPicture());
            map.put("role", "faculty");
            return Jwts.builder().claims(map).signWith(key).compact();
        }catch(Exception e) {
            return null;
        }
    }

    public Claims data(String jwt){
        try{
            return Jwts.parser().setSigningKey(key).build().parseSignedClaims(jwt).getPayload();
        }catch(Exception e){
            return null;
        }
    }
}


