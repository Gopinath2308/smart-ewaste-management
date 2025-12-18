package com.ewaste.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class PickupRequest {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Ewaste ewaste;

    private LocalDate pickupDate;
    private String status; // REQUESTED, ASSIGNED, PICKED, RECYCLED
    
 // getters and setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Ewaste getEwaste() {
		return ewaste;
	}
	public void setEwaste(Ewaste ewaste) {
		this.ewaste = ewaste;
	}
	public LocalDate getPickupDate() {
		return pickupDate;
	}
	public void setPickupDate(LocalDate pickupDate) {
		this.pickupDate = pickupDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    

}
