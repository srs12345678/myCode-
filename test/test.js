var date1 = new Date("2023-08-24");
var date2 = new Date("2023-08-15" );
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
alert(diffDays);