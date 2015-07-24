application.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',
            {
                templateUrl: 'template/general.html',
                controller: 'generalController'})
        .when('/wedding',
            {
                 templateUrl: 'template/wedding.html',
                 controller: 'weddingController'})
        .when('/private',
            {
                 templateUrl: 'template/private.html',
                 controller: 'privateController'})
        .when('/graduation', 
            {
                 templateUrl: 'template/graduation.html',
                 controller: 'graduationController'})
        .when('/love_story', 
              {
                templateUrl: 'template/love_story.html',
                controller: 'loveController'})
        .when('/blog',
            {
                templateUrl: 'template/blog.html',
                controller: 'blogController'})
        .when('/contact',
            {
                templateUrl: 'template/contact.html',
                controller: 'contactController'})
        .when('/about',
            {
                templateUrl: 'template/about.html',
                controller: 'aboutController'})
        .when('/article/:id',
            {
                templateUrl: 'template/blog_view.html',
                controller: 'blogViewController'})
        .otherwise({redirectTo: '/'})
}]);