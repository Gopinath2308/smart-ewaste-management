package com.ewaste.service;

import java.util.List;
import com.ewaste.model.Ewaste;

public interface EwasteService {
    Ewaste addEwaste(Ewaste ewaste);
    List<Ewaste> getAllEwaste();
}
