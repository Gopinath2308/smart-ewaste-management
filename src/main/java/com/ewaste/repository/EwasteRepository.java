package com.ewaste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ewaste.model.Ewaste;

public interface EwasteRepository extends JpaRepository<Ewaste, Long> {
}

