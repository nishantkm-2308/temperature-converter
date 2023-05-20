document.getElementById("submit").onclick = function(){
    let temp;
    if(document.getElementById("cbutton").checked){
        temp = document.getElementById("inbox").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("templabel").innerHTML = "Temperature :"+ temp + " &#8451";
    }

    else if(document.getElementById("fbutton").checked){
        temp = document.getElementById("inbox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("templabel").innerHTML = "Temperature :"+ temp + "&#8457";
    }

    else{
        document.getElementById("templabel").innerHTML = "Select a unit!!!";
        }
}


function tocelsius(temp){
    return(temp - 32) * (5/9);
}

function tofahrenheit(temp){
    return temp*9 / 5 + 32; 
}