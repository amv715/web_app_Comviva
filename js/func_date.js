if(localStorage.getItem("displayDate") === null){
    localStorage.setItem("displayDate", "block");
}
console.log(localStorage.getItem("displayDate"));

//checkTime function
(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
        //document.getElementById('test').innerHTML = h + ":" + m + ":" + s;
        var doc = document.getElementById("show");
        document.getElementById('test1').innerHTML = today;
        doc.style.display = localStorage.getItem("displayDate");
        console.log(localStorage.getItem("displayDate"));
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();

(function(document){
    var div = document.getElementById('clearid');
    var icon = document.getElementById('icon');
    //var open = false;
  
    div.addEventListener('click', function(){
      if(flag==0){
        icon.className = 'fa fa-arrow-down';  
      } else{
        icon.className = 'fa fa-arrow-down open';
      }
 
    });
  })(document);
//made use of jquery
  $(document).ready(function(){
    $('#refresh_icon').on('click',function(){
        if($(this).is(':checked'))
            { flag=1;
                icon.className = 'fa fa-arrow-down';}
        else { flag=0;
                icon.className = 'fa fa-arrow-down open';}
    });
})
