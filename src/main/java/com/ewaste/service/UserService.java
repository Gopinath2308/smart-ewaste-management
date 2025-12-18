package com.ewaste.service;

import java.util.List;
import com.ewaste.dto.UserResponseDTO;
import com.ewaste.model.User;

public interface UserService {
    User registerUser(User user);
    List<User> getAllUsers();
    
    UserResponseDTO login(String email, String password);
}
