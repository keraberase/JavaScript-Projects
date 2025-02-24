function performDictionary() {
     var mythicalCreature = {
       Species: "Dragon",
       Color: "Crimson Red",
       Element: "Fire",
       Age: 1200,
       Sound: "Roar",
     };
    document.getElementById("Dictionary").innerHTML = mythicalCreature.Sound;
}

function myFormDictionary() {
  var mythicalCreature = {
    Species: "Dragon",
    Color: "Crimson Red",
    Element: "Fire",
    Age: 1200,
    Sound: "Roar",
    };
    delete mythicalCreature.Sound;
  document.getElementById("Delete_form").innerHTML = mythicalCreature.Sound;
}