package com.dw.teamproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "products")
public class Products {

	
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "mainimg",nullable = false)
	private String mainimg;
	
	@Column(name = "subimg",nullable = false)
	private String subimg;
	
	@Column(name = "name",nullable = false)
	private String name;
	
	@Column(name = "sale",nullable = false)
	private String sale;
	
	@Column(name = "price",nullable = false)
	private int price;
	
	
	private String searchproducts;

	
	public Products() {
		super();
	}


	public Products(long id, String mainimg, String subimg, String name, String sale, int price, String searchproducts) {
		super();
		this.id = id;
		this.mainimg = mainimg;
		this.subimg = subimg;
		this.name = name;
		this.sale = sale;
		this.price = price;
		this.searchproducts = searchproducts;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getMainimg() {
		return mainimg;
	}


	public void setMainimg(String mainimg) {
		this.mainimg = mainimg;
	}


	public String getSubimg() {
		return subimg;
	}


	public void setSubimg(String subimg) {
		this.subimg = subimg;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSale() {
		return sale;
	}


	public void setSale(String sale) {
		this.sale = sale;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public String getSearchProducts() {
		return searchproducts;
	}


	public void setSearchProducts(String searchproducts) {
		this.searchproducts = searchproducts;
	}

	
	
	
}
