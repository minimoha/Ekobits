const request = require('request');
const fs = require('fs');

let myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs[0]);
let searchWord = myArgs[0];
//console.log(searchWord)
//hipster

request('https://icanhazdadjoke.com/search?term=' + searchWord, { json: true }, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  if (response.body.results.length <= 0) {
      console.log('No jokes today')
  } else {
    let random = Math.floor(Math.random() * response.body.results.length)
    console.log('response:', response.body.results)
    console.log(response.body.results[random].joke)
    fs.appendFile('jokes.txt', response.body.results[random].joke + '\n', close)
  }
  
});

let close = function (err) {
    if (err) {
        console.log(err)
    }
    console.log("Saved!!")
}