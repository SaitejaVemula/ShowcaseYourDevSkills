// https://www.boredapi.com/api/activity
console.log('hello, world!');

// fetch an activity from Bored API
const URL = 'https://www.boredapi.com/api/activity';
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.write(data.activity);
    });