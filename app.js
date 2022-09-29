var upperMessage = document.querySelector('.err-msg-upper');
var lowerMessage = document.querySelector('.err-msg-lower');
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var activeMessage = document.querySelector('.err-msg-lower');
var button = document.querySelector('.btn');
var input = document.getElementById('email');


window.onresize = function () {
    if (window.innerWidth || document.documentElement.clientWidth < 415) {
        activeMessage = upperMessage;
    } else {
        activeMessage = lowerMessage;
    }


}

function isEmailAddress(str) {
    return str.match(pattern);
}

button.onclick = function () {
    var result = isEmailAddress(input.value);
    console.log(activeMessage);
    if (!result) {
        activeMessage.style.visibility = "visible";
    } else {
        activeMessage.style.visibility = "hidden";
    }
}