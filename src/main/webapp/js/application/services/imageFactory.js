(function(){
    var imageFactory = function($http){
    	
    	var factory = {};
    	
    	factory.getGeneralPhoto = function(){
    		return $http.get('api/getPhoto/general');
    	};
    	
    	factory.getWeddingPhoto = function(){
    		return $http.get('api/getPhoto/wedding');
    	};
    	
    	factory.getPrivatePhoto = function(){
    		return $http.get('api/getPhoto/wedding');
    	};
        
        factory.getBlogPhoto = function(){
    		return $http.get('api/getPhoto/blog');
    	};
    	
    	return factory;
    };

    application.factory('imageFactory', imageFactory);
}());
