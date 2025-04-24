const a = [];
let b;
let i = 0;
while(true){
    i++;
    b = Number(prompt());
    if(!b){
        break
    };
    a.push(b)
};

const length = len(a)
console.log(`Длинна массива: ${length}`);


const minNum = min(a)
console.log(`Минимальное значение:${minNum}`)

const maxNum = max(a)
console.log(`Максимальное значение: ${maxNum}`)

const summ = sum(a)
console.log(`Сумма всех значений: ${summ}`)

const srednee = sred(a)
console.log(`Среднее значение: ${srednee}`)

function len(arr){
    return arr.length;
};

function min(arr){
    return Math.min.apply(null, arr)
};

function max(arr){
    return Math.max.apply(null, arr)
};

function sum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

function sred(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let srd = sum / arr.length
    return srd;
}