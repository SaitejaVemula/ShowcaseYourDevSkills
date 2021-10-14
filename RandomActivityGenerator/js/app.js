// fetch an activity from Bored API
const URL = 'https://www.boredapi.com/api/activity';

const activityElement = document.querySelector('#activity');
const peopleCountElement = document.querySelector('#peopleCount');

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //document.write(data.activity);
        activityElement.innerText = data.activity;
        peopleCountElement.innerText = data.participants;
        //document.write(data.link);
    });