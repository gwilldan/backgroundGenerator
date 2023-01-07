function myfunction() {

    var x = document.getElementById('1stHeader');

    if(x.style.display === "none" ) {
        x.style.display = "block";
        document.getElementById('displayButton').innerText = "HIDE"

    } else {
        x.style.display = "none"; 
        document.getElementById('displayButton').innerText = "UNHIDE"    
    }
    
}

function myfunction2() {
    const x = {name:"Godswill", age: "5", date:"1998"}
    var o = x.age;
    y = o ** 2;
    document.getElementById("1stHeader").innerText = y ;
}