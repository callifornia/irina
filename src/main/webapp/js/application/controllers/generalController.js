(function(){
    var generalController = function($scope, Page, imageFactory, $modal){
        Page.setTitle('Головна сторiнка');
          
        $scope.items = imageFactory.getGeneralPageImage;
        
        $scope.select;
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
    
    generalController.$inject = ['$scope', 'Page', 'imageFactory', '$modal'];
    application.controller('generalController', generalController);
}());