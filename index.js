// getting the value of the counter using query selector method
const countValue = document.querySelector("#counter");


// arrow functions for increment and decrement of the values
const increment = () => {
    // fetched the innerText of the UI
    let value = parseInt(countValue.innerText);
    // increment it as the role
    value = value + 1;
    // returning the value back to the UI
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};
