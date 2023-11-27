package com.dw.teamproject.service;

import java.util.List;

import com.dw.teamproject.model.BestItem;
//import com.dw.teamproject.dto.SearchDto;
import com.dw.teamproject.model.Products;
import com.dw.teamproject.model.Purchase;

public interface FunctionService {

//	저장
	Products saveProducts(Products products);
	BestItem saveBestItem(BestItem bestitem);
//	목록
	List<Products> getAllProducts();
	List<BestItem> getAllBestItems();
//	
	Products getProductsById(long id);
	BestItem getBestItemById(long id);
	
	Products updateProductsById(Products products, long id);
	BestItem updateBestItemById(BestItem bestitem, long id);
	
	void deleteProducts(long id);
	void deleteBestItem(long id);
	
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
