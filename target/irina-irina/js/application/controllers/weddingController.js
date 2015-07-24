(function(){
    var weddingController = function($scope, Page, imageFactory, $modal){
        Page.setTitle('Весільная фотосесія');
        $scope.items = imageFactory.getWeddingPageImage;  
        
        $scope.select;
        $scope.open = function(index){
            $scope.select = index;
            var modalInstance;
            var modalScope = $scope.$new();
            modalInstance = $modal.open({
                animation: true,
                templateUrl: 'template/modalWedding.html',
                controller: 'modalWeddingController',
                size: 'lg',
                scope: modalScope
            });
            modalScope.cancel = function(){
                modalInstance.dismiss('cancel');
            };
            modalInstance.result.then(function(index){
            });
        }
        
        
    }; // weddingController
    
    weddingController.$inject = ['$scope', 'Page', 'imageFactory', '$modal'];
    application.controller('weddingController', weddingController);

}());