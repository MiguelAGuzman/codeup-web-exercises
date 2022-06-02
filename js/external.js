alert('Welcome to my Website');
let userColor = prompt('What is you favorite color:');
console.log('Great ' + userColor + ' is my favorite color too!');
alert(userColor + " is my favorite color too.")

let littleMermaid = prompt('How many days are you renting Little Mermaid?');
let brotherBear = prompt('How many days are you renting Brother Bear?');
let hercules = prompt('How many days are you renting Hercules?');
let pricePerDay = 3;
let totalPrice = (littleMermaid+brotherBear+hercules) * pricePerDay
alert("You will have to pay $" + totalPrice + " to rent the movies");
console.log("You will have to pay $" + totalPrice + " to rent the movies");

let Google = 400;
let Amazon = 380;
let Facebook = 350;
let googleHours = prompt('How many hours did you work at Google?');
let amazonHours = prompt('How many hours did you work at Amazon?');
let facebookHours = prompt('How many hours did you work at Facebook?');
let weeklyPay = (Google * googleHours + Amazon * amazonHours + Facebook * facebookHours);
alert("You will receive $" + weeklyPay + " pay for this week.");
console.log("You will receive $" + weeklyPay + " pay for this week.")


function evaluation() {
    let enrolled = confirm('Are you enrolled?');
    let classSize = confirm('Is the class full?');
    if (enrolled === true && classSize === true){
        alert('Congrats your enrolled.')
    } else {alert('You are not enrolled.')}
}
evaluation()

function product() {
    let premiumMember = confirm('Are you a premium member?')
    let twoItems = confirm('Did you buy more than items?')
    let expired = confirm('Did the offer expire?')
    if (twoItems === true && expired === false || premiumMember === true) {
        alert('Product offer can be applied.')
    } else {alert('Product offer cannot be applied.')
    }
}
product()



