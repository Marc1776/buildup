



// let response = prompt("Hi, what is your name?");
// document.write("Hello, " + response + ", welcome to my page.")
// console.log(response);

let likeBunnies = "yes";

let response; 
while (response !== likeBunnies){
    response = (prompt( "Do you like bunnies?" )).toLowerCase();
    if (response !== likeBunnies) {
        alert( "Are you sure?")
    }
}

