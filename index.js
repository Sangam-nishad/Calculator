let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clearbtn");
let equal = document.querySelector(".equalbtn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;
        screen.value += value;//to push the value in our screen.
    })
});
equal.addEventListener("click", (e) => {
    if (screen.value === "") {
        screen.value = "";
    }
    else {
        let ans = eval(screen.value);
        screen.value = ans;
    }
});
clear.addEventListener("click", (e) => {
    screen.value = "";
})