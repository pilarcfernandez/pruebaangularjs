angular.module('pruebaApp',[])

    .controller('HeaderCtrl', function HeaderCtrl() {
        this.user = {
            name: 'Anonymous'};
    })

    .controller('MenuCtrl', function MenuCtrl() {
        this.options = [
            { name: 'List products', url: 'productos.html', icon: ''},
            { name: 'Hire', url: 'contratar.html', icon: '' },
            { name: 'My user settings', url: 'profile.html', icon: '' }
        ];
    })