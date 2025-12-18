package com.ewaste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ewaste.model.PickupRequest;
import com.ewaste.service.PickupRequestService;

@RestController
@RequestMapping("/api/admin/pickups")
@CrossOrigin("*")
public class AdminPickupController {

    @Autowired
    private PickupRequestService service;

    @GetMapping("/all")
    public List<PickupRequest> getAllPickups() {
        return service.getAllRequests();
    }

    @PutMapping("/update-status/{id}")
    public PickupRequest updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return service.updateStatus(id, status);
    }
}
