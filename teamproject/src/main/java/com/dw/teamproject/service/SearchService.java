package com.dw.teamproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dw.teamproject.model.Form;
import com.dw.teamproject.repository.FormRepository;


public class SearchService {
	
	@Autowired
	private FormRepository formRepository;

	public List<Form> search(String keyword) {
        return formRepository.searchForms(keyword);
    }
}
