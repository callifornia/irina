(function(){
    var contactController = function($scope, Page){
        Page.setTitle('Контакти');
    }; //contactController
    
    contactController.$inject = ['$scope', 'Page'];
    application.controller('contactController', contactController);
}());