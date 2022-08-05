

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


