'use strict'

// Requirements:
// Use the node fs module    x
// Accepts a file name as a command line parameter    x?
// Reads in the contents of the file specified        x?
// Convert the contents to a javascript object
// Alters some values in the object    
// Maybe use faker    x
// Save the new object back to the file        x?
// What 2 steps are required to do this?
// Re-Open and read the file contents
// Prove that the new file contents match your changed object

const faker = require('faker');
const fs = require('fs');

//test template from previous project
it('push() Accepts a file name as a command line parameter', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  Reads in the contents of the file specified', () => {
    let dataRead = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  Convert the contents to a javascript object', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  Alters some values in the object', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()   Maybe use faker', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  Save the new object back to the file', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  What 2 steps are required to do this?', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  Re-Open and read the file contents', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });

  it('push()  Prove that the new file contents match your changed object', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
    myList.push();
    expect( myList.length ).toEqual(3);
  });