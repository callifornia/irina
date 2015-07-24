(function () {
    'use strict';
    var aboutController = function ($scope, Page) {
        Page.setTitle('Про нас');
    };//aboutController
    
    aboutController.$inject = ['$scope', 'Page'];
    application.controller('aboutController', aboutController);
}());