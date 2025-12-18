package com.ewaste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ewaste.model.PickupRequest;
import com.ewaste.service.PickupRequestService;

@RestController
@RequestMapping("/api/pickups")
@CrossOrigin("*")
public class PickupRequestController {

    @Autowired
    private PickupRequestService service;

    @PostMapping("/create")
    public PickupRequest create(@RequestBody PickupRequest request) {
        return service.createRequest(request);
    }

    @GetMapping("/all")
    public List<PickupRequest> getAll() {
        return service.getAllRequests();
    }
    
    @GetMapping("/user/{userId}")
    public List<PickupRequest> getByUser(@PathVariable Long userId) {
        return service.getRequestsByUserId(userId);
    }

}
