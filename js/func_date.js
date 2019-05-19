
const dateElement = document.getElementById("date");
const options = {weekday : "long", month : "short", day : "numeric"};
const today = new Date();
function func_date() {          
    document.getElementById("date").innerHTML = "blehhhh";
            // dateElement.innerHTML = today.toLocaleDateString("en-US", options);
            // document.getElementById('testing').innerHTML = "<p>Hello wasssup</p>";
};

window.onload = function(){
     today.toLocaleDateString("en-US", options);
}