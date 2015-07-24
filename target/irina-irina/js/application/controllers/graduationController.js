(function(){
    var graduationController = function($scope, Page){
        Page.setTitle('Випускна фотосесія');
    }; //graduationController
    
    graduationController.$inject = ['$scope', 'Page'];
    application.controller('graduationController', graduationController);
}());