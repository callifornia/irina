(function(){
    
    var pageFactory = function(){
        var title = "default";
        return{
            title: function(){return title},
            setTitle: function(pageTitle){title = pageTitle}
        };
    };//pageFactory
    
    application.factory('Page', pageFactory);
    
}());