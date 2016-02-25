angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '/',
            templateUrl: 'home.html',
            controller: mainCtrl
        });

        function mainCtrl($scope) {
            $scope.test = 'test'
            var obj = {};
            var toolRow = [];
            toolRow[0] = obj.name = 'tool-select';
            toolRow[1] = obj.name = 'tool-scan';
            $scope.toolRow = toolRow;

        };

    })