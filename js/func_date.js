if(localStorage.getItem("displayDate") === null){
    localStorage.setItem("displayDate", "block");
}
console.log(localStorage.getItem("displayDate"));

(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
        document.getElementById('test').innerHTML = h + ":" + m + ":" + s;
        var doc = document.getElementById("show");
        doc.style.display = localStorage.getItem("displayDate");
        console.log(localStorage.getItem("displayDate"));
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();