(function(){
    var generalController = function($scope, Page, imageFactory, $modal, $http){
        Page.setTitle('Головна сторiнка');
        $scope.status;
        $scope.items;
        $scope.select;
        
        getItems();
             
        
        function getItems(){
            imageFactory.getGeneralPhoto()
                .success(function(data, status, headers, config){
                    $scope.items = data;
                })
                .error(function(data, status, headers, config){
                    $scope.status = 'Unable to load data' + status;
                })
        ;}
        
        
        $scope.open = function(index){
            $scope.select = index;
            var modalInstance;
            var modalScope = $scope.$new();
            modalInstance = $modal.open({
                animation: true,
                templateUrl: 'template/modalGeneral.html',
                controller: 'modalController',
                size: 'lg',
                scope: modalScope
            });
            modalScope.cancel = function () {
                modalInstance.dismiss('cancel');
            }; 
            modalInstance.result.then(function (index){
            });

        };
        
    }; // generalController
    
    generalController.$inject = ['$scope', 'Page', 'imageFactory', '$modal', '$http'];
    application.controller('generalController', generalController);
}());