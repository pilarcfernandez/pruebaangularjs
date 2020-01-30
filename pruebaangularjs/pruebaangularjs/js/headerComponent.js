(function(angular) {
    'use strict';
angular.module('pruebaApp').component('headerComponent', {
    templateUrl: 'partial/header.html',
    bindings: {
        user: '='
    }
});
})(window.angular);

