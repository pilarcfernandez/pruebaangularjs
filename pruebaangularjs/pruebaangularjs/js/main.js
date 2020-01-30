angular.module('pruebaApp', ['ngRoute'])

    .config(['$routeProvider',
        function ($routeProvider) {
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
        }])

    .controller('HeaderCtrl', function() {
        this.username = {
            name: 'Anonymous'
        };
    })

    .controller('MenuCtrl', function MenuCtrl() {
        this.options = [
            { name: 'My products', url: 'listProducts', icon: '' },
            { name: 'Fast Quoting', url: 'fastQuote', icon: '' },
            { name: 'My user settings', url: 'profile.html', icon: '' }
        ];
    })
    .controller('ListProductsCtrl', function ListProductsCtrl() {
        this.products = [
            { id: 1, name: 'Product 1', price: '105€', qt: 5, description: 'Lorem imspum' },
            { id: 2, name: 'Product 2', price: '78€', qt: 3, description: 'Lorem imspum' }
        ];
    })

    .controller('QuoteCtrl', function QuoteCtrl() {

    })
