function getrandomnum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

const a = getrandomnum(1, 10);
let b;
console.log(a)
let i = 0;
while(b != a){
    i++;
    b = Number(prompt(`Введите число. Попытка:${i}`));
    if (b === a){
        alert(`Вы угадали число ${a} c ${i} попытки!`);
        break;
    }
}
