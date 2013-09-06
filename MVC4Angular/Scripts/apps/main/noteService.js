/// <reference path="../../angular.js" />
/// <reference path="../../jquery-1.8.2.js" />
/// <reference path="../../jquery.signalR-1.0.0.js" />
/// <reference path="main.js" />
'use strict';
mainApp.factory('noteService', ['$', '$rootScope', function ($, $rootScope) {
    var proxy;
    var connection;
    return {
        connect: function () {
            connection = $.hubConnection();
            proxy = connection.createHubProxy('notesHub');
            connection.start();
            proxy.on('noteAdded', function (note) {
                $rootScope.$broadcast('noteAdded', note);
            });
        },
        isConnecting: function () {
            return connection.state === 0;
        },
        isConnected: function () {
            return connection.state === 1;
        },
        connectionState: function () {
            return connection.state;
        },
        addNote: function (note) {
            proxy.invoke('addNote', note);
        },
    }
}]);





