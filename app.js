var userName = prompt ("Please enter User_Name");
var welcome = "Welcome to JS Land...";
var happycode = "Happy Coding!";




if (userName === userName){
    alert("welcome" + "\n" + userName + "\n" + "Please enter your password!");    
}
else{
alert("Error! Please enter a valid User_Name.");
}
var password = prompt ("Please enter your password" + " " + "Hint (Pakistani)");

if (password === "Pakistani"){
    alert(welcome + "\n" + happycode);    
}
else{
    alert("Error! Please enter a valid password.");
    }
