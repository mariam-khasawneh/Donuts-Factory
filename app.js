// info prompts
// let userName = prompt("Please enter your name");
// let userGender = prompt("Please enter your Gender (male/female):").toLowerCase();



// // declear the welcome message
// var welcomeMsg;



// check that the user enter ther name
// if (userName == "") {
//     welcomeMsg = `Welcome Stranger`;
//     alert(welcomeMsg); 
// }



//check if the user enter gender
 
// while (userGender == "" ) { 
//     userGender = prompt("Please enter your Gender (male/female):").toLowerCase();
// } 
// if (userGender == "female") {
//     welcomeMsg = `welcome Ms. ${userName}`;
//     alert(welcomeMsg);
// } else if (userGender == "male") {
//     welcomeMsg = `welcome Mr. ${userName}`;
//     alert(welcomeMsg);
// }



// order prompts 
// let orderType = prompt("Please enter what you want to order (Dount , Coffee , Ice cream , Bakery)");
// let orderName = prompt("Plaese Write the Name of the order");

// order alert 
// alert(`Your order that name is ${orderName} getting prepared and that contain ${orderType}`);

// user name and order 
// console.log(`User name : ${userName} 
//             and whoes order is: ${ orderType} `);
   
// let userInfo = [userName, userGender, orderType, orderName];
// console.log(userInfo);

// for (var i = 0; i < userInfo.length; i++){
//     console.log(userInfo[i]);
// }


//____________________________________________________________________________________________

document.getElementById("submitButton").addEventListener("click", submitInfo)

function submitInfo(event) {
    event.preventDefault(); 
    let name = document.getElementById("userName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let order = document.getElementById("orderType").value;
    let cold = document.getElementById("coldDrink").checked; 
    let hot = document.getElementById("hotDrink").checked;
    
    
    let drinkType = '';
    (cold) ? drinkType = 'Cold' : drinkType = 'Hot'


    let dataToPresent = `
        <strong> Name: </strong> ${name} <br>
        <strong> Age: </strong> ${age} <br>
        <strong> Gendere: </strong> ${gender} <br>
        <strong> Order: </strong> ${order} <br>
        <strong> Drink Type: </strong> ${drinkType} <br>
    `


    document.getElementById("dataToPresrent").innerHTML = dataToPresent;

}
