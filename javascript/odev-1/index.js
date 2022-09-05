var myName=prompt("adınızı girininiz.");
var personName= document.querySelector("#name");

personName.innerHTML=`${myName}`;

function dateAndClock(){
    let date=new Date();
    let hour= date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    let day=date.getDay()
    
    let days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];

    let clockAndDate=document.querySelector(".date-clock");
    clockAndDate.innerHTML=hour+":"+minute+":"+second+" "+days[day];
    
}
setInterval(dateAndClock,1000);
