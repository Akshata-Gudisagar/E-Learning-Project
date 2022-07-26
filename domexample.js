// dom print name 
function printvalue() {
    var name = document.form1.name.value;
    alert("Welcome: " + name);
}

// cube of a no using document.getElementById 
function getcube() {
    var number = document.getElementById("number").value;
    alert(number * number * number);
}

// radio button 
function totalelements() {
    var allgenders = document.getElementsByName("gender");
    alert("Total Genders:" + allgenders.length);
}

// count paragraph 
function countpara() {
    var totalpara = document.getElementsByTagName("p");
    alert("total p tags are: " + totalpara.length);

}

// count the heading tags 
function counth2() {
    var totalh2 = document.getElementsByTagName("h2");
    alert("total h2 tags are: " + totalh2.length);
}
function counth3() {
    var totalh3 = document.getElementsByTagName("h3");
    alert("total h3 tags are: " + totalh3.length);
}

