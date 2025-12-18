package com.ewaste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ewaste.model.Ewaste;
import com.ewaste.service.EwasteService;

@RestController
@RequestMapping("/api/ewaste")
@CrossOrigin("*")
public class EwasteController {

    @Autowired
    private EwasteService service;

    @PostMapping("/add")
    public Ewaste addEwaste(@RequestBody Ewaste ewaste) {
        return service.addEwaste(ewaste);
    }

    @GetMapping("/all")
    public List<Ewaste> getAll() {
        return service.getAllEwaste();
    }
}

