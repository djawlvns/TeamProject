package com.dw.teamproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="purchase")
public class Purchase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	private Form form;
	
	private int quantity;

	public Purchase() {
		super();
	}

	public Purchase(long id, Form form, int quantity) {
		super();
		this.id = id;
		this.form = form;
		this.quantity = quantity;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Form getTeamProject() {
		return form;
	}

	public void setTeamProject(Form teamProject) {
		this.form = teamProject;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	
}
