(function(){
    var modalController = function($scope, imageFactory){
        
    $scope.items = imageFactory.getGeneralPageImage;
    getItemIndex = function(){
        for(var i = 0; i < $scope.items.length; i++){
            if($scope.select.id == $scope.items[i].id){
                return i;
            }
        }
    }
    
    $scope._Index = getItemIndex();
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.items.length - 1;
    };

    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.items.length - 1) ? ++$scope._Index : 0;
    };

    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
        
        
        
        
    }; // modalController

    
    modalController.$inject = ['$scope', 'imageFactory']; 
    application.controller('modalController', modalController);

}());