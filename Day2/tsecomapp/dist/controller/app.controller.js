var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to Transflower TypeScript!';
        this.users = [
            { name: 'Dnyandev Shendkar', email: 'dshendkar@gmail.com' },
            { name: 'shubham', email: 'shubham@gmail.com' },
            { name: 'shrikant', email: 'shrikant@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());

//angular.module('myApp').controller('MyController', MyController);
