
setInterval(timeChange,1000);

function timeChange(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // console.log(time);
    let day_night = "AM";
    if(hour > 12)
    {
        day_night = "PM";
    }
    if(hour > 12)
    {
        hour = hour - 12;
    }

    if(hour < 10)
    {
        hour = "0"+hour;
    }

    if(min < 10)
    {
        min = "0"+min;
    }

    if(sec < 10)
    {
        sec = "0"+sec;
    }

    document.getElementById("demo").innerHTML = hour + ":" + min + ":" + sec +" "+ day_night;

}