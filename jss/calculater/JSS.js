
var button =  document.getElementById("myButton"),
Text = document.getElementById("myText"),
Site = document.getElementById("JsCode"),
Site1 = document.getElementById("JsCode1" ),
Site3 = document.getElementById("JsCode2");


button.onclick =  function calculate()
{
Site.innerHTML  =  Text.value * 365 + "  " +" : عمرك باعداد الايام هو";
Site1.innerHTML  =  Text.value * 365 * 24  + "  " + "  " +" : عمرك باعداد  الساعات هو  ";
Site3.innerHTML = Text.value * 365 * 24 * 60 + "  " + " : عمرك بالدقايق هو  ";
}   

