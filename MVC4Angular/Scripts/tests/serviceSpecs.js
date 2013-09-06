/// <reference path="../angular.js" />
/// <reference path="../ui-bootstrap-0.5.0.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../apps/main/main.js" />
/// <reference path="../apps/main/noteService.js" />
/// <reference path="../jasmine.js" />
'use strict';

describe('noteService Tests', function () {
    var noteSvc;

    beforeEach(module('mainApp'));
    beforeEach(inject(function (noteService) {
        noteSvc = noteService;
        noteSvc.connect();
    }));

    it('should attempt connection',function () {
        expect(noteSvc.isConnecting()).toBe(true);
    });

})
