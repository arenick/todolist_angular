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
    vm.addTask = (newTask) => {
        vm.list.push({
            task: newTask,
            completed: false
        });
        console.log(newTask);
    }
    vm.removeTask = (index) => {
        vm.list.splice(index, 1);
    }
    vm.completeTask = (index) => {
        vm.list[index].completed = true;
    }
}

angular
    .module("toDoApp")
    .controller("TodoController", TodoController);