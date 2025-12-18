package com.ewaste.service;

import java.util.List;
import com.ewaste.model.PickupRequest;

public interface PickupRequestService {

    PickupRequest createRequest(PickupRequest request);
    List<PickupRequest> getAllRequests();
    
    List<PickupRequest> getRequestsByUserId(Long userId);
    
 // ADMIN APIs
    PickupRequest updateStatus(Long requestId, String status);
}

