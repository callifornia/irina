package com.photo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.photo.dao.PhotoDao;
import com.photo.model.Photo;


@Service
public class PhotoServiceImpl implements PhotoService{

	
	@Autowired PhotoDao photoDao;
	
	@Override
	public List<Photo> getPhoto(String category) {
		return photoDao.getPhoto(category);
	}
}
