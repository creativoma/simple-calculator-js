const takeValue = (x) => {
    let elem = document.getElementById('inputwindow');
    return elem.value += x;
}

const clearInput = (y) => {
    let elem = document.getElementById('inputwindow');
    return elem.value = y;
}

const calculateResult = () => {
    let result = eval(document.getElementById('inputwindow').value);
    let elem = document.getElementById('inputwindow');
    return elem.value = result;
}