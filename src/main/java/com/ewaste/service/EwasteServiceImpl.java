package com.ewaste.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ewaste.model.Ewaste;
import com.ewaste.repository.EwasteRepository;

@Service
public class EwasteServiceImpl implements EwasteService {

    @Autowired
    private EwasteRepository repository;

    @Override
    public Ewaste addEwaste(Ewaste ewaste) {
        return repository.save(ewaste);
    }

    @Override
    public List<Ewaste> getAllEwaste() {
        return repository.findAll();
    }
}

