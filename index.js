function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase());
}

function logWhisper(string) {
  console.log('hello'.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = string.lowercase()
  var uppercase = string.uppercase()

  if (string===lowercase) {
    return("I Can't hear youj!")
  }

  else (string===uppercase){
    return("YES INDEED!")
  }

  else if (string==="I Love you too grandma.") {
    return("I Love you too")
  }
}
