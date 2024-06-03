// info prompts
let userName = prompt("Please enter your name");
let userGender = prompt("Please enter your Gender (male/female):").toLowerCase();

// declear the welcome message
let welcomeMsg;

// Welcoming alert condition statments
if (userName != "") { 
    if (userGender === "male") {
        welcomeMsg = `Welcome Mr. ${userName}`;
    } else if (userGender === "female") {
        welcomeMsg = `Welcome Ms. ${userName}`;
    } else if (userGender === "") { 
        welcomeMsg = `Please enter your gender`;
    }else {
        welcomeMsg = `Welcome! please enter vailed Gender (male/female)`;
    }
} else {
    welcomeMsg = `please Enter your name`;
}

// welcoming msg alert
alert(welcomeMsg); 

// order prompts 
let order = prompt("Please enter what you want to order (Dount , Coffee , Ice cream , Bakery)");
let orderName = prompt("Plaese Write the Name of the order");

// order alert 
alert(`Your order that name is ${orderName} getting prepared and that contain ${order}`);

// user name and order 
console.log(`User name : ${userName} \nand whoes order is : ${order}` );