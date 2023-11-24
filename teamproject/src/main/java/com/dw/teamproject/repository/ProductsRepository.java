package com.dw.teamproject.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dw.teamproject.model.Products;

public interface ProductsRepository extends JpaRepository<Products, Long> {

	List<Products> searchproducts(String keyword);

}
