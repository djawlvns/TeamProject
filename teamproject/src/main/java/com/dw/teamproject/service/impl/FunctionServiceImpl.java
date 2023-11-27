package com.dw.teamproject.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.teamproject.model.BestItem;
import com.dw.teamproject.model.Products;
import com.dw.teamproject.model.Purchase;
import com.dw.teamproject.repository.BestItemRepository;
import com.dw.teamproject.repository.ProductsRepository;
import com.dw.teamproject.repository.PurchaseRepository;
import com.dw.teamproject.service.FunctionService;

@Service
public class FunctionServiceImpl implements FunctionService {
	
	private ProductsRepository productsRepository;
	private PurchaseRepository purchaseRepository;
	private BestItemRepository bestitemRepository;

//	리포지토리에 연결

	@Autowired
//	의존성 주입
	public FunctionServiceImpl(ProductsRepository productsRepository, PurchaseRepository purchaseRepository,
			BestItemRepository bestitemRepository) {
		super();
		this.productsRepository = productsRepository;
		this.purchaseRepository = purchaseRepository;
		this.bestitemRepository = bestitemRepository;
	}

	@Override
	public Products saveProducts(Products products) {
//		게임 저장
		return productsRepository.save(products);
	}
	
	@Override
	public BestItem saveBestItem(BestItem bestitem) {
		return bestitemRepository.save(bestitem);
	}

	@Override
	public List<Products> getAllProducts(){
		return productsRepository.findAll();
	}
	
	@Override
	public List<BestItem> getAllBestItems(){
		return bestitemRepository.findAll();
	}
	
	@Override
	public Products getProductsById(long id) {
		return productsRepository.findById(id).orElseThrow(()->
		null);
	}
	
	@Override
	public BestItem getBestItemById(long id) {
		return bestitemRepository.findById(id).orElseThrow(()->null);
	}
	
	@Override
	public Products updateProductsById(Products products,long id) {
		Products existingproducts = productsRepository.findById(id)
				.orElseThrow(()-> null);
		existingproducts.setMainimg(products.getMainimg());
		existingproducts.setName(products.getName());
		existingproducts.setSale(products.getSale());
		existingproducts.setPrice(products.getPrice());
		
		productsRepository.save(existingproducts);
		return existingproducts;
	}
	
	@Override
	public BestItem updateBestItemById(BestItem bestitem, long id) {
		BestItem existinbestitem = bestitemRepository.findById(id)
				.orElseThrow(()-> null);
		existinbestitem.setMainimg(bestitem.getMainimg());
		existinbestitem.setName(bestitem.getName());
		existinbestitem.setSale(bestitem.getSale());
		existinbestitem.setPrice(bestitem.getPrice());
		
		bestitemRepository.save(existinbestitem);
		return existinbestitem;
	}

	public void deleteProducts(long id) {
		productsRepository.findById(id).orElseThrow(()-> null);
		productsRepository.deleteById(id);
	}
	
	public void deleteBestItem(long id) {
		bestitemRepository.findById(id).orElseThrow(()->null);
		bestitemRepository.deleteById(id);
	}
	
	@Override
	public Purchase savePurchase(Purchase purchase) {
		return purchaseRepository.save(purchase);
	}

	@Override
	public List<Purchase> getAllPurchase(){
		return purchaseRepository.findAll();
	}

	public List<Products> searchProducts(String keyword) {
        // 검색 로직을 구현하고 검색 결과를 반환
        // 예를 들어, Form의 이름 또는 다른 필드를 기준으로 검색할 수 있습니다.
        return productsRepository.searchproducts(keyword);
    }



}
