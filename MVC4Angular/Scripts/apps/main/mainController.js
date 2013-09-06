/// <reference path="main.js" />
/// <reference path="../../angular.js" />
'use strict';

mainApp.controller('mainController', function mainController ($scope, $log, noteService) {
    noteService.connect();

    $scope.notes = [];

    $scope.$on('noteAdded', function (event, note) {
        $scope.notes.push(note);
        $scope.$apply();
    });

    $scope.addNote = function (note) {
        noteService.addNote(note);
        $scope.note = '';
    };
});



