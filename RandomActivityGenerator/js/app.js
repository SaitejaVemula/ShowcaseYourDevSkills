// fetch an activity from Bored API
const URL = 'https://www.boredapi.com/api/activity';

const card = document.querySelector('.card');
const activityElement = document.querySelector('#activity');
const peopleCountElement = document.querySelector('#peopleCount');
const counterElement = document.querySelector('#counter');

let count = 0;

function fetchNewActivity() {
    activityElement.innerText = 'Fetching an activity...';
    peopleCountElement.innerText = '#';
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            activityElement.innerText = data.activity;
            peopleCountElement.innerText = data.participants;
            counterElement.innerText = ++count;
        });
}

fetchNewActivity();
card.addEventListener('click', fetchNewActivity);