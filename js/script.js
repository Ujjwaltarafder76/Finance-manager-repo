let count = 0;
function insertIntoSelection(playerName) {
    console.log(document.getElementById('player-list').childElementCount);
    if (document.getElementById('player-list').childElementCount > 4) {
        alert('Limit Exceeded.');
        return false;
    }
    count++;
    const element = document.createElement('li');
    element.innerHTML = count + '. ' + playerName;
    document.getElementById('player-list').appendChild(element);
}
function disableButton(btnId) {
    document.getElementById(btnId).disabled = true;
    document.getElementById(btnId).style.backgroundColor = 'gray';
}

document.getElementById('player-one-btn').addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);
    if (flag === false) {
        return;
    }
    disableButton('player-one-btn');
});
document.getElementById('player-two-btn').addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);
    if (flag === false) {
        return;
    }
    disableButton('player-two-btn');
});
document.getElementById('player-three-btn').addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);
    if (flag === false) {
        return;
    }
    disableButton('player-three-btn');
});
document.getElementById('player-four-btn').addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);
    if (flag === false) {
        return;
    }
    disableButton('player-four-btn');
});
document.getElementById('player-five-btn').addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);
    if (flag === false) {
        return;
    }
    disableButton('player-five-btn');
});
document.getElementById('player-six-btn').addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);
    if (flag === false) {
        return;
    }
    disableButton('player-six-btn');
});

function insertIntoTextField(inputId, data) {
    document.getElementById(inputId).innerText = data;
}
function getDataFromInputField(inputId) {
    return parseInt(document.getElementById(inputId).value);
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const costPerPlayer = getDataFromInputField('player-cost');
    document.getElementById('player-ex').style.display = 'inline';
    insertIntoTextField('player-expense', costPerPlayer * count);
});
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const costPerPlayer = parseInt(document.getElementById('player-expense').innerText
    );
    const managerCost = getDataFromInputField('manager-cost');
    const coachCost = getDataFromInputField('coach-cost');
    const totalCost = costPerPlayer + managerCost + coachCost;
    document.getElementById('total-ex').style.display = 'inline';
    insertIntoTextField('total-expense', totalCost);
});