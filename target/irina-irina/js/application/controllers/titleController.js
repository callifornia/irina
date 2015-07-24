(function(){
    var titleController = function($scope, Page, $document){
        $scope.Page = Page;
        $scope.backToTop = function(){
            $document.scrollTopAnimated(0, 1000);
        };
    }// titleController
    
    titleController.$inject = ['$scope','Page','$document'];    
    application.controller('titleController', titleController);
}());