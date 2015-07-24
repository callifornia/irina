(function() {

    var blogViewController = function($scope, Page, $routeParams, imageFactory, $modal) {
        Page.setTitle('View page');
        $scope.id = $routeParams.id;
        
        $scope.items = imageFactory.getBlogPageImage;
        $scope.select;
        $scope.open = function(index){
            $scope.select = index;
            var modalInstance;
            var modalScope = $scope.$new();
            modalInstance = $modal.open({
                animation: true,
                templateUrl: 'template/modalBlogView.html',
                controller: 'modalBlogController',
                size: 'lg',
                scope: modalScope
            });
            modalScope.cancel = function(){
                modalInstance.dismiss('cancel');
            };
            modalInstance.result.then(function(index){
            });
        }
    };//blogViewController
    
    blogViewController.$inject = ['$scope','Page','$routeParams', 'imageFactory', '$modal'];
    application.controller('blogViewController', blogViewController);
}());