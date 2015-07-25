'use strict';

angular.module('burnsearchApp')
    .controller('SearchController', function($scope, $state, $stateParams) {
        $scope.searchEntityTab = 'Events';

        $scope.lastEventsPage = -1;
        $scope.currentEventsPage = 0;
        $scope.totalEvents = undefined;

        $scope.lastCampsPage = -1;
        $scope.currentCampsPage = 0;
        $scope.totalCamps = undefined;

        $scope.transitionEvents = function() {
            $state.transitionTo('events', $stateParams);
        };

        $scope.transitionCamps = function() {
            $state.transitionTo('camps', $stateParams);
        };

        $scope.transitionEvents();
    });

