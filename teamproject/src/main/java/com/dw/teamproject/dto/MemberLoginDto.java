package com.dw.teamproject.dto;

public class MemberLoginDto {

	
	private String loginId;
	

	private String password;
	
	

	public MemberLoginDto() {
		super();
	}



	public MemberLoginDto(String loginId, String password) {
		super();
		this.loginId = loginId;
		this.password = password;
	}


	public String getLoginId() {
		return loginId;
	}



	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}
}
