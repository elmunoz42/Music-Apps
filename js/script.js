function majorChord(startingNote) {
  var noteNumber = parseInt(startingNote) % 12;
  var thirdNumber = noteNumber + 4;
  var fifthNumber = noteNumber + 7;
  return "Root: " + noteNumber + "\nThird: " + thirdNumber + "\nFifth: " + fifthNumber;
}
