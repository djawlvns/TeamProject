package com.dw.teamproject.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dw.teamproject.model.Form;

public interface FormRepository extends JpaRepository<Form, Long> {

	List<Form> searchForms(String keyword);

}
