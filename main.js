
let mondayTasks = [];
let tuesdayTasks = [];
let wednesdayTasks = [];
let thursdayTasks = [];
let fridayTasks = [];
let saturdayTasks = [];
let sundayTasks = [];

const allTasksArrays = [mondayTasks, tuesdayTasks, wednesdayTasks, thursdayTasks, fridayTasks, saturdayTasks, sundayTasks];

const mondayRadio = document.getElementById('day1');
const tuesdayRadio = document.getElementById('day2');
const wednesdayRadio = document.getElementById('day3');
const thursdayRadio = document.getElementById('day4');
const fridayRadio = document.getElementById('day5');
const saturdayRadio = document.getElementById('day6');
const sundayRadio = document.getElementById('day7');

let allDaysRadio = [mondayRadio, tuesdayRadio, wednesdayRadio, thursdayRadio, fridayRadio, saturdayRadio, sundayRadio];

const monday = document.getElementById('Pon');
const tuesday = document.getElementById('Wt');
const wednesday = document.getElementById('Sr');
const thursday = document.getElementById('Czw');
const friday = document.getElementById('Pt');
const saturday = document.getElementById('Sob');
const sunday = document.getElementById('Niedz');

let allWeekDays = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

const taskInput = document.getElementById('taskInput');

function updateTasks() {

    allWeekDays.forEach(function (day, index) {
        let position = 0;
        day.querySelector('ol').innerHTML = '';
        console.log(allTasksArrays);
        dayTask = allTasksArrays[index]
        console.log(dayTask)
        dayTask.forEach(function (task) {
            console.log(task)
            position++;
            day.querySelector('ol').innerHTML += `<li>${position}. ${task}</li>`;
        })
    });
}

document.getElementById('addTask').addEventListener('submit', function (event) {
    event.preventDefault();
    let position = 0;

    allDaysRadio.forEach(function (radio, index) {
        if (radio.checked) {
            allTasksArrays[index].push(taskInput.value);
            allWeekDays[index].querySelector('ol').innerHTML = '';
            taskInput.value = '';
            allTasksArrays[index].forEach(function (task) {
                position++;
                allWeekDays[index].querySelector('ol').innerHTML += `<li>${position}. ${task}</li>`;
            })
        }
    })
})



document.getElementById('addTask').addEventListener('reset', function (event) {
    const everyOl = document.querySelectorAll('ol');

    everyOl.forEach(item => {
        item.innerHTML = '';
    });
    mondayTasks.length = 0;
    tuesdayTasks.length = 0;
    wednesdayTasks.length = 0;
    thursdayTasks.length = 0;
    fridayTasks.length = 0;
    saturdayTasks.length = 0;
    sundayTasks.length = 0;
})

const mondayRadio2 = document.getElementById('day1_2');
const tuesdayRadio2 = document.getElementById('day2_2');
const wednesdayRadio2 = document.getElementById('day3_2');
const thursdayRadio2 = document.getElementById('day4_2');
const fridayRadio2 = document.getElementById('day5_2');
const saturdayRadio2 = document.getElementById('day6_2');
const sundayRadio2 = document.getElementById('day7_2');

let allDaysRadio2 = [mondayRadio2, tuesdayRadio2, wednesdayRadio2, thursdayRadio2, fridayRadio2, saturdayRadio2, sundayRadio2];

document.getElementById('editTask').addEventListener('submit', function (event) {
    event.preventDefault();
    let taskNumber = document.getElementById('taskNumber');
    taskNumber.value--;

    let position = 0;

    allDaysRadio2.forEach(function (radio, index) {
        if (radio.checked) {
            allTasksArrays[index][taskNumber.value] = window.prompt(`Wpisz nową treść zadania `)
            allWeekDays[index].querySelector('ol').innerHTML = '';

            allTasksArrays[index].forEach(function (task) {
                position++;
                allWeekDays[index].querySelector('ol').innerHTML += `<li>${position}. ${task}</li>`;
            })
            taskNumber.value = '';
        }
    })
})

document.getElementById('editTask').addEventListener('reset', function (event) {
    event.preventDefault();
    let taskNumber = document.getElementById('taskNumber');
    taskNumber.value--;

    let position = 0;

    allDaysRadio2.forEach(function (radio, index) {
        if (radio.checked) {
            allTasksArrays[index].splice(taskNumber.value, 1);
            allWeekDays[index].querySelector('ol').innerHTML = '';
            allTasksArrays[index].forEach(function (task) {
                position++;
                allWeekDays[index].querySelector('ol').innerHTML += `<li>${position}. ${task}</li>`;
            })
            taskNumber.value = '';
        }
    })
})


