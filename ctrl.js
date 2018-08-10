"use strict";

function TodoController () {
    const vm = this;
    vm.list = [
        {
        task: "Laundry",
        completed: false
        },
        {
        task: "Dishes",
        completed: true
        },
        {
        task: "Grocery shop",
        completed: false
        },
        {
        task: "Homework",
        completed: true
        }
    ];
}

angular
    .module("toDoApp")
    .controller("TodoController", TodoController);