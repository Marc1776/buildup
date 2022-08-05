

function getName(){
    let userName = prompt("What is your name?");
    if (userName == "" || userName == null || userName == undefined) {
        alert("Nice try");
        getName();
    } else {
        document.write("Hey " + userName + ", welcome to the bunny page!");
        }
}
getName()

function likeBunnies(){
    let userName = prompt("Do you like bunnies?");
    if (userName == "" || userName == null || userName == undefined) {
        alert("Nice try");
        getName();
    } else {
        document.write("We love bunnies too!");
        }
}
likeBunnies()

function howManyBunnies(){
    let response = prompt("How many photos would you like to see? Please pick a value from 1 to 3");
    for (let i = 0; i < response; i= i + 1){
        document.write('<img src="photos/Easter.jpg" />');
    }
}
howManyBunnies()


// function askLikeBunnies(){
//     let response = prompt("Do you like bunnies?");
//     if (response == "yes"){
//         alert("You're in the right place!");
//     }
//     else if (response == "no"){
//         alert("Are you sure? Try again.");
//     }
//     else if {
//         alert("Please answer yes or no.");
//     }
//     // response = (prompt("Do you like bunnies?")) .toLowerCase();
// }

// askLikeBunnies()


