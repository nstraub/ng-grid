datagrid.directive('reducedGrid', function () {
    return {
        restrict: 'A',
        scope: {
            filters: '=',
            order: '=',
            items: '=',
        },
        transclude: true,
        template: '<ul class="data-grid">' +
            '<text-column editable="false" field="username"></text-column>' +
            '<text-column editable="false" field="email"></text-column>' +
            '<command-column text="delete" command="delete(item)"></command-column>' +
        '</ul>',
        link: function (scope, element, attributes) {
            scope.delete = function (item) {
                for (var i = 0; i < scope.items.length; i++) {
                    if (scope.items[i] == item) {
                        break;
                    }

                }

                scope.items.splice(i, 1);
            }
        }
    }
});