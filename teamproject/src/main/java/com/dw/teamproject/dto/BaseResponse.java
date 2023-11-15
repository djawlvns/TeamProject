package com.dw.teamproject.dto;

public class BaseResponse<T> {

	private String reesultCode;
	
	private T data;
	
	private String message;

	public BaseResponse(String reesultCode, T data, String message) {
		super();
		this.reesultCode = reesultCode;
		this.data = data;
		this.message = message;
	}

	public BaseResponse() {
		super();
	}

	public String getReesultCode() {
		return reesultCode;
	}

	public void setReesultCode(String reesultCode) {
		this.reesultCode = reesultCode;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
