package com.faculty.FacultyDashboard.configration;



import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration
@EnableJpaRepositories(basePackages = {"com.faculty.FacultyDashboard.repository"})
public class CorsConfig implements WebMvcConfigurer {

    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper();
    }

    @Override
    public void addCorsMappings(CorsRegistry resigtry){
        resigtry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry){
            registry.addInterceptor(new AuthorizationInterceptor()).addPathPatterns("/api/faculty/**");
            registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/login/**");
    }
}
