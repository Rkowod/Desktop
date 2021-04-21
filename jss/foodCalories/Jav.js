

var myButton1 = document.getElementById("bto-n-1"),
    myButton2 = document.getElementById("bto-n-2"),
    myButton3 = document.getElementById("bto-n-3"),
    Text = document.getElementById("Mytext"),
    displayChickens = document.getElementById("chickens"),
    displayMeat = document.getElementById("Meat"),
    displayMilk = document.getElementById("Milk");


myButton1.onclick = function foodCalories()
{
    displayChickens.innerHTML = Text.value * 99 + "  " + ": عداد سعرات الدجاج هو";
}

myButton2.onclick = function foodCalories()
{
    displayMeat.innerHTML = Text.value * 178 + "  " + ": عداد سعرات اللحم هو";
}

myButton3.onclick = function foodCalories3()
{
    displayMilk.innerHTML = Text.value * 42.3 + "  " + " :   عداد سعرات الحليب ";

}

function clearIt() {
    document.getElementById("Mytext").value = "";
   }