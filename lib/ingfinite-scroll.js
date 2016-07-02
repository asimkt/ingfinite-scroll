angular.module('ingfinite-scroll', [])


.directive('whenScrolled', function() {
    return {

        restrict: 'A',
        scope: {
            'shouldLoadItems': '@',
            'infiniteScroll': '@',
            'whenScrolled': '&',
            'distanceFromBottom': '@'
        },
        controller: function($scope,
            $document,
            $window) {
            var throttleScrollEvent = false;
            setup();

            function setup() {
                if ($scope.infiniteScroll === 'true') {
                    angular.element($document).on('scroll', renderItems);
                }
            }

            function renderItems() {
                // Throttle scroll events for maximum performace.
                // Now using 500ms for throttling
                if (!throttleScrollEvent &&
                    $scope.shouldLoadItems === 'true' &&
                    $window.pageYOffset + $window.innerHeight > document.body.clientHeight - +$scope.distanceFromBottom) {
                    // Apply function for loading more items in the model.
                    $scope.whenScrolled();
                    throttleScrollEvent = true;
                    setTimeout(function() {
                        throttleScrollEvent = false;

                    }, 500);
                }
            }

            function cleanUp() {
                angular.element($document).off('scroll');
            }

            // Collect garbage when original model is changed.
            $scope.$on('$destroy', cleanUp);

        }
    };
});