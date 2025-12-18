package com.ewaste.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ewaste.model.Ewaste;
import com.ewaste.model.PickupRequest;
import com.ewaste.model.User;
import com.ewaste.repository.EwasteRepository;
import com.ewaste.repository.PickupRequestRepository;
import com.ewaste.repository.UserRepository;

@Service
public class PickupRequestServiceImpl implements PickupRequestService {

    @Autowired
    private PickupRequestRepository pickupRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EwasteRepository ewasteRepository;

    @Override
    public PickupRequest createRequest(PickupRequest request) {

        // Fetch full User from DB
        User user = userRepository
                .findById(request.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Fetch full Ewaste from DB
        Ewaste ewaste = ewasteRepository
                .findById(request.getEwaste().getId())
                .orElseThrow(() -> new RuntimeException("Ewaste not found"));

        // Set full objects
        request.setUser(user);
        request.setEwaste(ewaste);
        request.setStatus("REQUESTED");

        return pickupRepository.save(request);
    }

    @Override
    public List<PickupRequest> getAllRequests() {
        return pickupRepository.findAll();
    }
    
    @Override
    public List<PickupRequest> getRequestsByUserId(Long userId) {
        return pickupRepository.findByUserId(userId);
    }

    
    @Override
    public PickupRequest updateStatus(Long requestId, String status) {

    	// Allowed status values
        List<String> validStatus = List.of(
                "REQUESTED",
                "ASSIGNED",
                "PICKED",
                "RECYCLED"
        );

        // Check status validity
        if (!validStatus.contains(status.toUpperCase())) {
            throw new RuntimeException(
                "Invalid status. Allowed values: REQUESTED, ASSIGNED, PICKED, RECYCLED"
            );
        }

        PickupRequest request = pickupRepository
                .findById(requestId)
                .orElseThrow(() -> new RuntimeException("Pickup Request not found"));

        request.setStatus(status.toUpperCase());
        return pickupRepository.save(request);
    }

}
