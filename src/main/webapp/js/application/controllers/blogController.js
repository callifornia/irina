(function(){
    var blogController = function($scope, Page, imageFactory){
        Page.setTitle('Блог');
        $scope.items = imageFactory.getBlogPageImage;
       
        
    }; //blogController

    blogController.$inject = ['$scope', 'Page', 'imageFactory'];
    application.controller('blogController', blogController);
}());