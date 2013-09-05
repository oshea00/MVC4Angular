/// <reference path="../../angular.js" />
/// <reference path="../../jquery-1.8.2.js" />
/// <reference path="../../jquery.signalR-1.0.0.js" />
/// <reference path="main.js" />
'use strict';

mainApp.value('$', $);
mainApp.factory('noteService', ['$', '$rootScope', function ($, $rootScope) {
    var connection;
    var proxy;
    return {
        connect: function () {
            connection = $.hubConnection();
            proxy = connection.createHubProxy('notesHub');
            connection.start();
            proxy.on('noteAdded', function (name) {
                $rootScope.$broadcast('noteAdded', name);
            });
        },
        addNote: function (note) {
            proxy.invoke('addNote', note);
        }
    }
}]);

