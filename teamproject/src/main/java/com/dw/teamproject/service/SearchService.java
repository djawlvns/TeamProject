package com.dw.teamproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dw.teamproject.model.Products;
import com.dw.teamproject.repository.ProductsRepository;


public class SearchService {
	
	@Autowired
	private ProductsRepository productsRepository;

	public List<Products> search(String keyword) {
        return productsRepository.searchproducts(keyword);
    }
}
