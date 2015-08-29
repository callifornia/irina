package com.photo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.photo.model.Photo;

@Repository
public class PhotoDaoImpl implements PhotoDao {


	@Autowired DataSource dataSource;
	
	@Override
	public List<Photo> getPhoto(String category) {
		List<Photo> list = new ArrayList<Photo>();
		String sql = "SELECT id, url_small_img, url_big_img, category FROM photos WHERE category = ?";
		try(Connection connection = dataSource.getConnection()){
			PreparedStatement preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, category);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				Photo photo = new Photo();
				photo.setId(resultSet.getInt("id"));
				photo.setUrl_small_img(resultSet.getString("url_small_img"));
				photo.setUrl_big_img(resultSet.getString("url_big_img"));
				photo.setCategory(resultSet.getString("category"));
				list.add(photo);
			}
		} catch(SQLException e){
			e.printStackTrace();
		}
		return list;
	}
	
	
}
