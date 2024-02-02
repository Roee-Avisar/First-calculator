var display; 

document.addEventListener('DOMContentLoaded', function () {
    display = document.getElementById('display');
});

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    display.value += char;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
