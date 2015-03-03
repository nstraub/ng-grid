datagrid.directive('detailedGrid', function($compile, $rootScope, $timeout) {
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
            '<text-column editable="true" field="description" validator="eightyPercentChance"></text-column>' +
            '<text-column editable="true" field="details" validator="noFWords"></text-column>' +
            '<text-column editable="true" field="email" validator="onlyEmails"></text-column>' +
            '<boolean-column editable="true" field="active"></boolean-column>' +
            '<boolean-column editable="true" field="locked"></boolean-column>' +
        '</ul>',
        link: function (scope, element, attributes) {
            scope.eightyPercentChance = function (text, oldText) {
                if (Math.random() * 10 < 8) {
                    return text;
                }
                return oldText;
            }

            scope.noFWords = function (text) {
                return text.replace(/fuck/g, 'f$@!');
            }

            scope.onlyEmails = function (text, oldText) {
                if (text.indexOf('@') > -1) {
                    return text;
                }
                return oldText;
            }


        }
    };
});
