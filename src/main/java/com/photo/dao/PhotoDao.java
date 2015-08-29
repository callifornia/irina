package com.photo.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.photo.model.Photo;


public interface PhotoDao {

	public List<Photo> getPhoto(String category);

}
