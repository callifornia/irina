package com.photo.model;

public class Photo {

	private Integer id;
	private String url_small_img;
	private String url_big_img;
	private String header_description;
	private String body_description;
	private String category;
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getUrl_small_img() {
		return url_small_img;
	}
	
	public void setUrl_small_img(String url_small_img) {
		this.url_small_img = url_small_img;
	}
	
	public String getUrl_big_img() {
		return url_big_img;
	}
	
	public void setUrl_big_img(String url_big_img) {
		this.url_big_img = url_big_img;
	}
	
	public String getHeader_description() {
		return header_description;
	}
	
	public void setHeader_description(String header_description) {
		this.header_description = header_description;
	}
	
	public String getBody_description() {
		return body_description;
	}
	
	public void setBody_description(String body_description) {
		this.body_description = body_description;
	}
	
	
	
	
}
