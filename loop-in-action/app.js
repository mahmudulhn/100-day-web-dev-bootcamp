const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const useNumberInputElement = document.getElementById('user-number');
    const enteredNumber = useNumberInputElement.value;
    let sumUpToNumber = 0;

    for (let i = 1; i <= enteredNumber; i++)   sumUpToNumber += i;

    const outputResultElement = document.querySelector('#calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

const highlightLinksButtonElement = document.querySelector("#highlight-links button");

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) anchorElement.classList.add('highlight');

}

highlightLinksButtonElement.addEventListener('click', highlightLinks)

const dummyUserData = {
    firstName: "Mahmudul - Hasan",
    lastName: "Nihad",
    age: 26
};

const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData() {
    const outputDataElement = document.querySelector('#output-user-data');
    outputDataElement.innerHTML = '';
    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        newUserDataListItemElement.textContent = key.toUpperCase() + ': ' + dummyUserData[key];
        outputDataElement.append(newUserDataListItemElement);
    }
}
displayUserDataButtonElement.addEventListener('click', displayUserData);

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');


    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        numberOfRolls++
        const newRollListItemElement = document.createElement('li');
        newRollListItemElement.textContent = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        diceRollsListElement.append(newRollListItemElement)
        if (rolledNumber == enteredNumber) {
            hasRolledTargetNumber = true;
        }
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);