function fun() {
    document.getElementById("paragraph").append(" changed.");
}

function myPrompt() {
    var person = prompt("Pass your name: ", "");
    if(person != null){
        if(person.charAt(person.length-1) == 'a'){
            document.getElementById("welcome").append(" panią " + person);
        }
        else {
            document.getElementById("welcome").append(" pana " + person);
        }
    }
}