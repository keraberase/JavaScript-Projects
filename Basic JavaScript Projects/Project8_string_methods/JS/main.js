function Concatenate() {
    var part1 = "Hello, ";
    var part2 = "all";
    var part3 = "world!";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}