package com.ewaste.controller;

import java.util.List;
import com.ewaste.dto.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ewaste.model.User;
import com.ewaste.service.UserService;
import com.ewaste.dto.*;

import java.util.HashMap;
import java.util.Map;
import com.ewaste.security.JwtUtil;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }
    
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest loginRequest) {

        UserResponseDTO user = userService.login(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        if (user == null) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = JwtUtil.generateToken(user.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", user);

        return response;
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}

