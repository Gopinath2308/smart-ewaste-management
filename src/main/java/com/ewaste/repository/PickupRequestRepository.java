package com.ewaste.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ewaste.model.PickupRequest;

public interface PickupRequestRepository extends JpaRepository<PickupRequest, Long> {
	
	// Find pickup requests by user id
    List<PickupRequest> findByUserId(Long userId);
}
