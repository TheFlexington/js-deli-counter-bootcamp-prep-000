function takeANumber(array, name) {
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + array.length + ' in line.';
}

function takeANumber(array) {
  let i = 0;
  i++;
  array.push(i);
  return `Welcome you are number ${i} in line`;
}


function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${array.shift(0)}.`;
  }
}

function currentLine(deliLine) {
  let i = 0;
  let line = [];
  while (i < deliLine.length) {
    line.push([i+1] + '. ' + deliLine[i]);
    i++;
} if (deliLine.length === 0) {
  return 'The line is currently empty.';
} else {
  return 'The line is currently: ' + line.join(', ');
  }
}

<<<<<<< HEAD
=======

>>>>>>> 3cd55bc31c6e7750d4dc5835f6df43b6432f21cf
/*
function currentLine (array) {
  return array.length === 0
   ? "The line is currently empty."
   : `The line is currently: ${
       array.map((entry, i) => `${i+1}. ${entry}`)
         .join(", ")
     }`;
}
*/
