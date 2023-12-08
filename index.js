/*
1. Пользователь вводит год своего рождения, вывести
информацию о возрасте пользователя в разные года
до текущего. Например, вводим «2003». Вывод: «в
2003 было 1 год», «в 2004 было 2 год», «в 2005 было
3 год» и т.д.
 */

let dateOfBirth = prompt('Введите свой возраст: ');
let date = new Date();
for (let i = dateOfBirth; i < date.getFullYear(); i++) {
    let age = i - dateOfBirth;
    console.log(`В ${i} было ${age} год`);
}

/*
2. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
каждое последующее число должно быть больше предыдущего, иначе вывести
ошибку.
 */
let firstNumber = prompt('Введите первое число: ');
if (!isNaN(firstNumber)) {
    firstNumber = Number(firstNumber);
}
console.log(`Первое число: ${firstNumber}`)
for (let i = 1; i < 5; i++) {
    let userInput = prompt('Введите следующее число: ');
    console.log(`Число ${userInput} > ${firstNumber}`)
    console.log(userInput > firstNumber ? firstNumber = userInput : 'Ошибка');
}