datagrid.directive('textColumn', function () {
    return {
        restrict: 'E',
        template: '<li class="data-grid__column">' +
            '<ul class="data-grid__column__list">' +
                '<li class="list__header">' +
                    '<span class="header__title" ng-show="!searching">{{field}}</span>' +
                    '<text-filter></text-filter><sorter ng-show="!searching"></sorter>' +
                '</li>' +
                '<ngrid-list><text-cell></ngrid-list>' +
            '</ul>' +
        '</li>',
        scope: true,
        link: function (scope, element, attributes) {
            scope.editable = attributes.editable === 'true';
            scope.field = attributes.field;
            scope.validator = attributes.validator;
        }
    };
});
datagrid.directive('textCell', function () {
    return {
        scope: true,
        template: '<span class="cell" ' +
            'ng-dblclick="openEdit(item, $event)" ' +
            'ng-show="!editing">' +
                '{{item[field]}}</span>' +
            '<input class="cell" ng-blur="closeEdit()" ng-keypress="handleKey($event.which, item)" ng-model="newValue" type="text" ng-show="editing"/>',
        link: function (scope) {
            scope.openEdit = scope.editable ? 
                function (item, $event) {
                    scope.editing = true;
                    setTimeout(function () {
                        $($event.target).siblings('input').focus();
                    }, 0);
                
                    scope.newValue = item[scope.field];
                }
            :
                function () { };

            scope.closeEdit = function () {
                scope.editing = false;
                scope.newValue = item[scope.field];
            }

            scope.handleKey = function (keyNumber, item) {
                if (keyNumber === 13) {
                    item[scope.field] = scope[scope.validator] ? scope[scope.validator](scope.newValue, item[scope.field]) : scope.newValue;
                    scope.editing = false;
                }
                
            }
        }
    }
});

datagrid.directive('textFilter', function () {
    return {
        template: '<a class="search" href="" ng-click="openSearch($event)"><i class="fa fa-search search-{{hasCriterion}}" ng-show="!searching"></i></a><input class="filter" type="text" ng-show="searching" ng-model="filters[field]" ng-blur="closeSearch()" />',
        link: function (scope) {
            scope.openSearch = function ($event) {
                scope.searching = true;
                setTimeout(function () {
                    $($event.target).siblings('input').focus();
                }, 0);
            }

            scope.closeSearch = function () {
                scope.searching = false;
                scope.hasCriterion = scope.filters[scope.field] && scope.filters[scope.field].length > 0;
            }
        }
    }
})