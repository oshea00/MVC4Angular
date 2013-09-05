/// <reference path="main.js" />
/// <reference path="../../angular.js" />
'use strict';

mainApp.controller('mainController', function mainController ($scope, noteService) {

    $scope.title = "Hi There";
    noteService.connect();

    $scope.$on('noteAdded', function (event, note) {
        $scope.added = note;
        $scope.$apply();
    });

    $scope.addNote = function (note) {
        noteService.addNote(note);
    };
});



