function calc() {
let first = (document.getElementById("fname").value);
let last = (document.getElementById("lname").value)
let fullname = first + '' + last; document.getElementById("full").innerHTML = fullname ;
let Grr1 = parseInt(document.getElementById("G1").value);
parseInt(document.getElementById("Gr1").innerHTML = Grr1)
let Grr2 = parseInt(document.getElementById("G2").value);
parseInt(document.getElementById("Gr2").innerHTML = Grr2)
let Grr3  = parseInt(document.getElementById("G3").value);
parseInt(document.getElementById("Gr3").innerHTML = Grr3)
let AG = (Grr1 + Grr2 + Grr3) / 3;  parseInt(document.getElementById("Ag").innerHTML = AG )
let LA; 
if (100 >= AG && AG <= 90 ){
    LA = "A"
}
if (90 >= AG && AG <= 80){
    LA = "B"
}
if (80 >= AG && AG <= 70){
    LA = "C"
}
if (70 >= AG && AG <= 60){
    LA = "D"
}
if (60 >= AG && AG <= 0){
    LA = "F"
}
parseInt(document.getElementById("La").innerHTML = LA)

}