angular.module('app').directive('toolSelect', function ($compile) {
    return {
        restrict: 'AEC',
        link: link,
        template:'<i tool-select></i>'
    }
    function link(scope, elem, attr) {
        //var e = angular.element('<input type="text" ng-model="a" >');
        var e = '';
        elem.html('hi')
        // elem.append(e);
        elem.on('click', function () {
            alert('hi')
            elem.html('hi')
            $compile(element.contents())(scope);
        })

    }
});


angular.module('app').directive('toolScan', function () {
    return {
        restrict: 'AEC',
        link: link,
        template:'<i tool-scan></i>'
    }
    function link(scope, elem, attr) {
        elem.html('<input type="text" ng-model="ab" >')
    }
})