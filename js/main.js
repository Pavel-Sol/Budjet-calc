let startBtn = document.getElementById('start')
let budgetValue = document.querySelector('.budget-value')
let daybudgetValue = document.querySelector('.daybudget-value')
let levelValue = document.querySelector('.level-value')
let expensesValue = document.querySelector('.expenses-value')
let optionalexpensesValue = document.querySelector('.optionalexpenses-value')
let incomeValue = document.querySelector('.income-value')
let monthsavingsValue = document.querySelector('.monthsavings-value')
let yearsavingsValue = document.querySelector('.yearsavings-value')


let expensesItem = document.querySelectorAll('.expenses-item')
let expensesBtn = document.querySelector('.expenses-item-btn')
let optionalexpensesBtn = document.querySelector('.optionalexpenses-btn')
let countBtn = document.querySelector('.count-budget-btn')
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item')

let chooseIncome = document.querySelector('.choose-income')
let checksavings = document.querySelector('#savings')
let chooseSum = document.querySelector('.choose-sum')
let choosepercent = document.querySelector('.choose-percent')

let yearValue = document.querySelector('.year-value')
let monthValue = document.querySelector('.month-value')
let dayValue = document.querySelector('.day-value')


// ----------------------------------------------------------------------------


let money;
let time;


startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц', '');
    while (isNaN(money) || money == null || money == '') {
        money = prompt('Ваш бюджет на месяц', '');
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed()

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

})

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value
        let b = expensesItem[++i].value

        if (a.length < 50 && a != '' && b != '') {
            appData.expenses[a] = b;
            sum += +b
        } else {
            i--
        }
    }
    expensesValue.textContent = sum
})

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let a = optionalexpensesItem[i]
        if (a != null && a != '') {
            appData.optionalExpenses[i] = a.value
            optionalexpensesValue.innerHTML += `${a.value} <br>`
        } else {
            i--
        }
    }
})

countBtn.addEventListener('click', function () {
    if (appData.budjet != undefined) {
        appData.monyPerDay = (appData.budjet / 30).toFixed()
        daybudgetValue.textContent = appData.monyPerDay

        if (appData.monyPerDay < 100) {
            levelValue.textContent = `Ваш уровень достатка низкий`
        } else if (appData.monyPerDay > 100 && appData.monyPerDay < 2000) {
            levelValue.textContent = `Ваш уровень достатка средний`
        } else if (appData.monyPerDay > 2000) {
            levelValue.textContent = `Ваш уровень достатка высокий`
        } else {
            levelValue.textContent = `Произошла ошибка`
        }
    } else {
        alert('Сначала нажмите кнопку "Начать расчет"')
    }
})

chooseIncome.addEventListener('input', function () {
    let item = chooseIncome.value
    appData.income = item.split(',')
    incomeValue.textContent = appData.income
})

checksavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false
    } else {
        appData.savings = true
    }
})
chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value
        let percent = +choosepercent.value

        appData.monhtInCome = sum / 100 / 12 * percent;
        appData.YearInCome = sum / 100 / 12 * percent;

        monthsavingsValue.textContent = appData.monhtInCome.toFixed(1)
        yearsavingsValue.textContent = appData.YearInCome.toFixed(1)
    }
})
choosepercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value
        let percent = +choosepercent.value

        appData.monhtInCome = sum / 100 / 12 * percent;
        appData.YearInCome = sum / 100 / 12 * percent;

        monthsavingsValue.textContent = appData.monhtInCome.toFixed(1)
        yearsavingsValue.textContent = appData.YearInCome.toFixed(1)
    }
})


let appData = {
    budjet: money,
    timeData: time,
    expenses: {}, // обязательн расходы
    optionalExpenses: {}, // НЕобязательн расходы
    income: [], // поп доходы
    savings: false // доходы с депозита под процент  
};