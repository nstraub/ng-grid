datagrid.directive('commandColumn', function () {
    return {
        restrict: 'E',
        template: '<li class="data-grid__column">' +
            '<ul class="data-grid__column__list">' +
                '<li class="list__header">' +
                    '<span class="header__title">{{field}}</span>' +
                '</li>' +
                '<ngrid-list><a class="cell" href="" ng-click="command({item: item})">{{text}}</a></ngrid-list>' +
            '</ul>' +
        '</li>',
        scope: {
            editable: '@',
            field: '@',
            text: '@',
            command: '&'
        },
        link: function (scope, element, attributes) {
            scope.items = scope.$parent.items;
            scope.order = scope.$parent.order;
            scope.filters = scope.$parent.filters;
        }
    };
});