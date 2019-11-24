var bad = document.getElementById("text").innerHTML="12345";


function bad(){ document.getElementById("text").innerHTML = "12345"
    }
    

             

var medium = "medium"

function bad()
{
document.getElementById("text").innerHTML="yourpetsname";
}



var good = "good"

function generatePassword() {
    var length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;


}