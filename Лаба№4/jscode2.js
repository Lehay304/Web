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

a.sort((a, b) => b - a);
console.log(a)
