// Switch Statement

function hero_Function() {
    var Hero_Output;
    var Hero = document.getElementById("Hero-input").value;
    var Hero_String = " is a great hero!";
    switch(Hero) {
        case "Iron man":
            Hero_Output = "Iron man" + Hero_String;
            break;
        case "Spider man":
            Hero_Output = "Spider man" + Hero_String;
            break;
        case "Hulk":
            Hero_Output = "Hulk" + Hero_String;
            break;
        case "Batman":
            Hero_Output = "Batman" + Hero_String;
            break;
        case "Aqua man":
            Hero_Output = "Aqua man" + Hero_String;
            break;
        case "Flash":
            Hero_Output = "Flash" + Hero_String;
            break;
        default:
            Hero_Output = "Please enter a hero exactly as written on the above list.";
    }
    document.getElementById("Hero-Output").innerHTML = Hero_Output;
}