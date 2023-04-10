// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : 
// Today is: Friday. 
// Current time is: 4PM:50:22
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();

let currentWeekday = weekdays[now.getDay()];
let formattedWeekdays = `Today is: ${currentWeekday}\n`;

let AMorPM;
let hours = now.getHours();
if(hours>=12){
    AMorPM='PM';
}else{
    AMorPM='AM';
}

hours = hours % 12 || 12;
let min = now.getMinutes();
let sec = now.getSeconds();
let formattedTime = "Current time is: "+hours+AMorPM+":"+min+":"+sec; 

console.log(formattedWeekdays+" "+formattedTime);