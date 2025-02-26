var newA = " ";
function TextCHANGES() {
    var a = document.getElementById("inputText").value;
    if (a === newA){
        alert("Текст нe поменялся");
    } else {
        alert("Текст поменялся");
    }
    newA = a;
};
document.getElementById("textButton").addEventListener("click", TextCHANGES);