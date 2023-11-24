package com.dw.teamproject.service;

import java.util.List;

//import com.dw.teamproject.dto.SearchDto;
import com.dw.teamproject.model.Products;
import com.dw.teamproject.model.Purchase;

public interface FunctionService {

//	저장
	Products saveProducts(Products team);
//	목록
	List<Products> getAllProducts();
//	
	Products getProductsById(long id);
	
	Products updateProductsById(Products products, long id);
	
	void deleteProducts(long id);
	
	Purchase savePurchase(Purchase purchase);
	List<Purchase> getAllPurchase();
	
	List<Products> searchProducts(String keyword);
	
	
	
    /**
     * 게시글 리스트 조회
     * @return 게시글 리스트
     */
//    List<Form> getAllsearch(SearchDto params);

    /**
     * 게시글 수 카운팅
     * @return 게시글 수
     */
//    int count(SearchDto params);
}
