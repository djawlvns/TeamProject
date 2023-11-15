package com.dw.teamproject.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.teamproject.dto.SearchDto;
import com.dw.teamproject.model.Form;
import com.dw.teamproject.model.Purchase;
import com.dw.teamproject.repository.FormRepository;
import com.dw.teamproject.repository.PurchaseRepository;
import com.dw.teamproject.repository.SearchRepository;
import com.dw.teamproject.service.FunctionService;

@Service
public class FunctionServiceImpl implements FunctionService {
	
	private FormRepository formRepository;
	private PurchaseRepository purchaseRepository; 

//	리포지토리에 연결

	@Autowired
//	의존성 주입
	public FunctionServiceImpl(FormRepository formRepository, PurchaseRepository purchaseRepository ) {
		super();
		this.formRepository = formRepository;
		this.purchaseRepository = purchaseRepository;
	}

	@Override
	public Form saveForm(Form form) {
//		게임 저장
		return formRepository.save(form);
	}
	

	@Override
	public List<Form> getAllForms(){
		return formRepository.findAll();
	}
	
	@Override
	public Form getFormById(long id) {
		return formRepository.findById(id).orElseThrow(()->
		null);
	}
	
	@Override
	public Form updateFormById(Form form,long id) {
		Form existingform = formRepository.findById(id)
				.orElseThrow(()-> null);
		existingform.setTitle(form.getTitle());
		existingform.setGenre(form.getGenre());
		existingform.setImage(form.getImage());
		existingform.setPrice(form.getPrice());
		existingform.setText(form.getText());
		
		formRepository.save(existingform);
		return existingform;
	}

	public void deleteForm(long id) {
		formRepository.findById(id).orElseThrow(()-> null);
		formRepository.deleteById(id);
	}
	
	@Override
	public Purchase savePurchase(Purchase purchase) {
		return purchaseRepository.save(purchase);
	}

	@Override
	public List<Purchase> getAllPurchase(){
		return purchaseRepository.findAll();
	}

	public List<Form> searchForms(String keyword) {
        // 검색 로직을 구현하고 검색 결과를 반환
        // 예를 들어, Form의 이름 또는 다른 필드를 기준으로 검색할 수 있습니다.
        return formRepository.searchForms(keyword);
    }


}
