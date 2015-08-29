(function(){
    var privateController = function($scope, Page, imageFactory, $modal){
        Page.setTitle('Приватна  фотосесія');
        $scope.items;
        getItems();
        function getItems(){
            imageFactory.getPrivatePhoto()
                .success(function(data, status, headers, config){
                    $scope.items = data;
                })
                .error(function(data, status, headers, config){
                    $scope.status = 'Unable to load data' + status;
                })
        ;}  
        
        
        
        $scope.select;
        $scope.open = function(index){
            $scope.select = index;
            var modalInstance;
            var modalScope = $scope.$new();
            modalInstance = $modal.open({
                animation: true,
                templateUrl: 'template/modalPrivate.html',
                controller: 'modalPrivateController',
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
    
    privateController.$inject = ['$scope', 'Page', 'imageFactory', '$modal'];
    application.controller('privateController', privateController);

}());