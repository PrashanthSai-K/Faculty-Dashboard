package com.faculty.FacultyDashboard.configration;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;

public class LoginInterceptor implements HandlerInterceptor {

    private static final Logger log = LoggerFactory.getLogger(LoginInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        try{
            String token = (String) request.getHeader("Authorization");
            System.out.println(token);
            if(token == null || token.isEmpty()){
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                response.getWriter().write("Unauthorized to access");
                return false;
            }
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }
}
