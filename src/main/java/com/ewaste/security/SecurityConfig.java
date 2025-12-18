package com.ewaste.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/users/login",
                    "/api/users/register",

                    // EWASTE
                    "/api/ewaste/**",

                    // PICKUP (USER)
                    "/api/pickups/**",

                    // ADMIN (🚨 THIS WAS MISSING)
                    "/api/admin/**"
                ).permitAll()
                .anyRequest().authenticated()
            );

        return http.build();
    }
}
