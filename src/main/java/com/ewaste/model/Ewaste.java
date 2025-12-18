package com.ewaste.model;

import jakarta.persistence.*;

@Entity
public class Ewaste {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ewasteType;
    private int quantity;
    private String description;
    
 // getters and setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEwasteType() {
		return ewasteType;
	}
	public void setEwasteType(String ewasteType) {
		this.ewasteType = ewasteType;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    
    
}
