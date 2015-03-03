datagrid.directive('ngridList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        template: '<li ' +
            'class="data-grid__cell" ' +
            'ng-repeat="item in items|filter:filters|orderBy:order.by" ' +
            'inner-transclude></li>',
        transclude: true,
        compile: function (element, attributes, transcludefn) {
            return {
                pre: function (scope) {
                    scope.transclude = transcludefn;
                }
            };
        }
    }
});