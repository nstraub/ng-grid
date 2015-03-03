datagrid.controller('demo', function ($scope) {
    $scope.filters = {};
    $scope.order = { by: 'username' }
    $scope.reducedFilters = {};
    $scope.reducedOrder = { by: 'username' }
    $scope.data = [
        { username: 'test1', description: 'test1', details: 'test1', email: 'test1@test.com', active: true, locked: false, meta: {} },
        { username: 'test2', description: 'test2', details: 'test2', email: 'test2@test.com', active: true, locked: false, meta: {} },
        { username: 'test3', description: 'test3', details: 'test3', email: 'test3@test.com', active: true, locked: false, meta: {} },
        { username: 'test4', description: 'test4', details: 'test4', email: 'test4@test.com', active: true, locked: false, meta: {} },
        { username: 'test5', description: 'test5', details: 'test5', email: 'test5@test.com', active: true, locked: false, meta: {} }
    ];
});