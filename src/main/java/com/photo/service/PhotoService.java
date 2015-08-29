package com.photo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.photo.model.Photo;



public interface PhotoService {

	public List<Photo> getPhoto(String category);

}
