const names = [];
const ul = document.getElementById("list");
let a;
let i = 0
while(true){
    i++
    a = prompt("Введите имя и фамилию:")
    if(!a){
        break;
    }
    names.push(a.trim());
};

names.sort();

const listElement = document.getElementById("list");
if(names.length > 0){
    names.forEach(name => {
        const li = document.createElement("li")
        li.textContent = name;
        listElement.appendChild(li);
    });
};