const useCreateDate =()=>{
 const dateObj = new Date();
 const month = dateObj.getMonth();
 let monthName;
 switch(month) {
  case 0: monthName="Jan";
  break;
  case 1: monthName="Feb";
  break;
  case 2: monthName="Mar";
  break;
  case 3: monthName="Apr";
  break;
  case 4: monthName="May";
  break;
  case 6: monthName="Jun";
  break;
  case 7: monthName="Jul";
  break;
  case 8: monthName="Aug";
  break;
  case 9: monthName="Sep";
  break;
  case 10: monthName="Oct";
  break;
  case 11: monthName="Dec";
  break;
 }
 const date = `${monthName} ${dateObj.getDate()},${dateObj.getFullYear()} [${dateObj.getHours()}: ${dateObj.getMinutes()}]`;
 return date;
}

 export default  useCreateDate;