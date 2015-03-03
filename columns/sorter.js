datagrid.directive('sorter', function () {
    return {
        restrict: 'E',
        replace: 'true',
        scope: false,
        template: '<a style="float: right;margin-right: 5px;" href="#"><i ng-click="toggleSort()" class="fa fa-sort"></i></a>',
        compile: function () {
            return function (scope) {
                scope.toggleSort = function () {
                    if (scope.order.by.indexOf(scope.field) > -1) {
                        if (scope.order.by[0] === '-') {
                            scope.order.by = scope.field;
                        } else {
                            scope.order.by = '-' + scope.field;
                        }
                    } else {
                        scope.order.by = scope.field;
                    }
                }
            }
        }
    };
})