
app = angular.module("demo", []);

app.controller("MainController", function($scope, $http) {

    // the array which represents the list
    $scope.items = ["1. Scroll the list to load more"];
    $scope.loading = true;
    // this function fetches a random text and adds it to array
    $scope.more = function() {
        $scope.loading = true;

        $http({
            method: "GET",
            url: "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
        }).success(function(data, status, header, config) {
            // returned data contains an array of 2 sentences
            for (line in data) {
                newItem = ($scope.items.length + 1) + ". " + data[line];
                $scope.items.push(newItem);
            }
            $scope.loading = false;
        });
    };

    // we call the function twice to populate the list
    $scope.more();
});