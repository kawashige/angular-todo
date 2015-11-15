'use strict';

angular.module('angularTodoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo', {
        url: '/todo',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      });
  });