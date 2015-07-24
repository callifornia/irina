(function(){
    var loveController = function($scope, Page, Lightbox) {
        Page.setTitle('Love Story');
        
        var images = [];
        
        for(var i = 0; i < 24; i++){
            images[i] = 
                {
                    'url' : '../img/gallery/loveStory/' + (i + 1) + (i + 1) + ".jpg"
                }
        };
        
        $scope.images = images;
        $scope.openLightboxModal = function(index){
            Lightbox.openModal($scope.images, index);
        }
    }
    
    loveController.$inject = ['$scope', 'Page', 'Lightbox'];
    application.controller('loveController', loveController);
}());