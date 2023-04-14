const toppings = document.getElementById('toppings');
const sizes = document.getElementsByName('size');
const submit = document.getElementById('submit');

let userPizzaSize;
let userPizzaCost;
let userTotal;
let totalMSG;

submit.addEventListener('click', function(event) {
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            userPizzaSize = sizes[i].value;
            userPizzaCost = parseInt(userPizzaSize);
            //console.log('Price:', userPizzaCost);
            break;
          }
        }
    
    userTotal = (userPizzaCost + parseInt(toppings.value)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    totalMSG = "Total: " + userTotal;
    document.querySelector('#total').textContent = totalMSG;
    //console.log('Total Price:', userTotal);
    });











