angular.module('pruebaApp', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/listProducts', {
                    templateUrl: 'partial/listProducts.html',
                    controller: 'ListProductsCtrl',
                    controllerAs: 'prods'
                })
                .when('/fastQuote', {
                    templateUrl: 'partial/fastQuote.html',
                    controller: 'QuoteCtrl',
                    controllerAs: 'quot'
                });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });
        }])

    .controller('HeaderCtrl', function HeaderCtrl() {
        this.user = {
            name: 'Anonymous'
        };
    })

    .controller('MenuCtrl', function MenuCtrl() {
        this.options = [
            { name: 'List products', url: 'listProducts', icon: '' },
            { name: 'Fast Quoting', url: 'fastQuote', icon: '' },
            { name: 'My user settings', url: 'profile.html', icon: '' }
        ];
    })

    .controller('ListProductsCtrl', function ListProductsCtrl() {
        this.products = [
            { name: 'Anonymous', price: '' }
        ];
    })


    .controller('QuoteCtrl', function QuoteCtrl() {
        
    })
