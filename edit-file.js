'use strict'

//use fs
const fs = require('fs');

//found on MDN
//accepts a file name as a command line parameter
process.argv.forEach(function (val, index, dataRead) {
    console.log(index + ': ' + val);
  });

  const fileToRead = `${__dirname}/person.json`;
  console.log(fileToRead);
  const fileToWrite = `${__dirname}/person.json`;
  console.log(fileToWrite);

  //creates a new file reader constructor
  //found using 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader'
  var reader = new FileReader();

  function printFile(file) {
    var reader = new FileReader();
    reader.onload = function(evt) {       //idk what its doin exactly so i should probably leave it out
      console.log(evt.target.result);
    };
    reader.readAsText(file);
    printFile();
  }
  ///////////////////////////////////////////////////////////////////////////

  //tried a write file function
  const dataWrite = [];
fs.writeFile(fileToWrite, (data) => {
  if (err) {
    console.error(err);
    // data will not be set if there is an error
    console.log({ data })
    return;
  }
  //creates empty array 
  const dataRead = [];
  fs.readFile(fileToRead, (err, data) => {
    // Do stuff with data!
    if (err) {
      console.error(err);
      // data will not be set if there is an error
      console.log({ data })
      return;
    }
  
    dataRead.push(data.toString());
    //finished process of reading file
    console.log('async readFile succeeded!')
    console.log(data.toString());
  
    doSomethingWithDataRead();
  });
  //started process of reading file
  console.log('just called readFile');
  console.log(dataRead);
  
  function doSomethingWithDataRead() {
    console.log(dataRead.length);
  }
