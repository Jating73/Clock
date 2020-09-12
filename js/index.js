setInterval(() => {
    d = new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes();
    secondtime = d.getSeconds();

    hourRotation = 30*hourtime +minutetime/2;
    minuteRotation = 6*minutetime;
    secondRotation = 6*secondtime;

    hour.style.transform=`rotate(${hourRotation}deg`;
    minute.style.transform=`rotate(${minuteRotation}deg)`;
    second.style.transform=`rotate(${secondRotation}deg)`;
}, 1000);
