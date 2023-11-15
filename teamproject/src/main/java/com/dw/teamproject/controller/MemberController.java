package com.dw.teamproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dw.teamproject.dto.BaseResponse;
import com.dw.teamproject.status.ResultCode;
import com.dw.teamproject.dto.MemberDto;
import com.dw.teamproject.dto.MemberLoginDto;
import com.dw.teamproject.service.MemberService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/member")
@CrossOrigin(origins="http://localhost:3000", 
	methods= {RequestMethod.GET, RequestMethod.POST})
public class MemberController {
	private MemberService memberService;
	@Autowired
	public MemberController(MemberService memberService) {
		super();
		this.memberService = memberService;
	}
	
	@PostMapping("signup")
	public ResponseEntity<BaseResponse<Void>> signUp(@RequestBody @Valid MemberDto memberDto) {
		return new ResponseEntity<BaseResponse<Void>>(
				new BaseResponse<Void>(ResultCode.SUCCES.name(),
				null,
				memberService.signUp(memberDto)),
				HttpStatus.CREATED);
	}
	
	@PostMapping("login")
    public ResponseEntity<BaseResponse<Void>> login(@RequestBody @Valid MemberLoginDto memberLoginDto) {
        return new ResponseEntity<>(new BaseResponse<Void>(
        		ResultCode.SUCCES.name(), 
        		null, 
        		memberService.login(memberLoginDto)), 
        		HttpStatus.OK) ;
    }
}
