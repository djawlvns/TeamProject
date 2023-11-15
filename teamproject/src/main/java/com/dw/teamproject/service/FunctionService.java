package com.dw.teamproject.service;

import java.util.List;

//import com.dw.teamproject.dto.SearchDto;
import com.dw.teamproject.model.Form;
import com.dw.teamproject.model.Purchase;

public interface FunctionService {

//	저장
	Form saveForm(Form team);
//	목록
	List<Form> getAllForms();
//	
	Form getFormById(long id);
	
	Form updateFormById(Form form, long id);
	
	void deleteForm(long id);
	
	Purchase savePurchase(Purchase purchase);
	List<Purchase> getAllPurchase();
	
	List<Form> searchForms(String keyword);
	
	
	
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
