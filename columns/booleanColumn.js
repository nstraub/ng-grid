datagrid.directive('booleanColumn', function () {
    return {
        restrict: 'E',
        template: '<li class="data-grid__column">' +
            '<ul class="data-grid__column__list">' +
                '<li class="list__header">' +
                    '<span class="header__title">{{field}}</span>' +
                    '<boolean-filter>' +
                '</li>' +
                '<ngrid-list><boolean-cell></ngrid-list>' +
            '</ul>' +
        '</li>',
        scope: true,
        link: function (scope, element, attributes) {
            scope.editable = attributes.editable === 'true';
            scope.field = attributes.field;
        }
    };
});

datagrid.directive('booleanCell', function () {
    return {
        scope: true,
        template: '<span class="cell boolean--{{item[field]}}" ng-click="toggleField(item)"></span>',
        link: function (scope) {
            scope.toggleField = function (item) {
                item[scope.field] = !item[scope.field];
            }
        }
    }
});

datagrid.directive('booleanFilter', function () {
    return {
        scope: true,
        template: '<span class="boolean-filter" ng-click="toggleFilter()" ng-class="filterState"></span>',
        link: function (scope) {
            var filterStates = ['boolean--off', 'boolean--true', 'boolean--false'],
                currentState = 0;
            
            scope.filterState = filterStates[currentState];
            scope.toggleFilter = function () {
                currentState++;
                if (currentState === 1) {
                    scope.filters[scope.field] = true;
                } else if (currentState === 2) {
                    scope.filters[scope.field] = false;
                } else {
                    currentState = 0;
                    scope.filters[scope.field] = '';
                }
                scope.filterState = filterStates[currentState];
            }

        }
    }
});