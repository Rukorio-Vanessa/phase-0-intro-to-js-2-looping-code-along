// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const message = ["surprise"];
//describe function 'writeCards'which returns an array of thank you messages for each name provided to the function
function writeCards(names, message){
    let thankyouMessages = [];
    
    for(let i = 0; i < names.length; i++){
        thankyouMessages.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return thankyouMessages;
}

//describe countDown function which invokes console.log once for each number, counting down from the number provided to zero
function countDown(y){
    for (let i = y; i > -1; i--){
        console.log(i);
    }
}
countDown(10)
