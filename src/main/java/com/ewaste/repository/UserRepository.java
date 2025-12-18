package com.ewaste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ewaste.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
