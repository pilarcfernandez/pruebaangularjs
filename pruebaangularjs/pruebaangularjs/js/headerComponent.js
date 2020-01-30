(function(angular) {
    'use strict';angular.module('pruebaApp', ['ngRoute'])
    .component('headerComponent', {
        templateUrl: 'partial/header.html',
        controller: 'HeaderCtrl',
        controllerAs: 'hdr',
        bindings: {
            user: '='
        }
    });
})(window.angular);

