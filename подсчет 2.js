const formSelect = document.querySelector('.addition_form select[name=type]');

const formInput = document.querySelector('.addition_form input');

const formButtons = document.querySelector('#form_buttons');

const sectionIncome = document.querySelector('.sections_income .container');

const sectionCosts = document.querySelector('.sections_costs .container')

const results = document.querySelector('.result_container');

const incomeValues = JSON.parse(localStorage.getItem("incomeValue")) || [];
const costsValues = JSON.parse(localStorage.getItem("costsValue")) || [];

const createP = (value, sector, array) => {
    const p = document.createElement('p');
    p.innerHTML = value; 
    sector.appendChild(p);
    array.push(value);
}

const clearSections = () => {
    document.querySelectorAll('p').forEach(elem => elem.remove());
    clearItogo();
    incomeValues = [];
    costsValues = [];
}

const clearItogo = () => {
    const itogo = 0;
    results.innerHTML = itogo;
}

const updateItogo = () => {
    const incomesAmount = incomeValues.reduce((prev, current) =>  prev + +current, 0);
    const costAmount = costsValues.reduce((prev, current) =>  prev + +current, 0);
    const itogo = incomesAmount - costAmount;

    results.innerHTML = itogo;
} 

updateItogo();

incomeValues.forEach(value => {
    createP(value, sectionIncome, incomeValues);
});

costsValues.forEach(value => {
    createP(value, sectionCosts, costsValues);
});

const saveData = () => {
    let incomeValuesString = JSON.stringify(incomeValues);
    let costsValuesString = JSON.stringify(costsValues);
    localStorage.setItem('incomeValue', incomeValuesString);
    localStorage.setItem('costsValue', costsValuesString);
}

formInput.onblur = () => {
    if (!formInput.value.length) {
        formInput.classList.add('invalid');
        error.innerHTML = 'Значение не введено';
    } else {
        formInput.classList.remove('invalid');
        error.innerHTML = '';
    }
}

class Action {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    add () {
        const optionValue = formSelect.options[formSelect.selectedIndex].value;
        if (optionValue == 'Доходы') {
            createP(formInput.value, sectionIncome, incomeValues);
        } else if (optionValue == 'Расходы') {
            createP(formInput.value, sectionCosts, costsValues);
        } else {
            alert ("Параметр не задан");
        }

        saveData(); 
        updateItogo();
    }

    clear () {
        localStorage.clear();
        clearSections();
        clearItogo();
    }

    onClick(event) {
        let action = event.target.dataset.action;
        event.preventDefault();
        if (action) {
            this[action]();
        }
    }
}

new Action(formButtons);



