package com.photo.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.photo.model.Photo;
import com.photo.service.PhotoService;


@Controller
public class ImageController {

	private static final Logger logger = LogManager.getLogger(ImageController.class);
	
	@Autowired PhotoService photoService;
	
	
	
	//http://localhost:8080/irina/api/getPhoto/category
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "getPhoto/{category}", method = RequestMethod.GET)
	public List<Photo> getPhoto(@PathVariable String category){
		System.out.println("request" + category);
		return photoService.getPhoto(category); 
	}
	
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "getPhoto", method = RequestMethod.GET)
	public List<Photo> getPhoto(){
		logger.info("category: ");
		return photoService.getPhoto("general"); 
	}
	
}
