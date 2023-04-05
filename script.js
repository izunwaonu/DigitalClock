function displayTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var sect = "AM";


    if (h==0){
        h=12;
    }
    if (h>12){
        h=h-12;
        sect = "PM";
    }
    h = (h<10)? "0" + h: h;
    m = (m<10)? "0" + m: m;
    s = (s<10)? "0" + s: s;
    var time = h + ": " + m + ": " + s + ": " + sect;
    document.getElementById("clock-id").innerHTML = time;
    setTimeout(displayTime, 1000);

}
displayTime()