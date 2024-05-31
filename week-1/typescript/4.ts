/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */


function getDateAndTime() : void {
    const date : Date = new Date();

    const month : number = date.getMonth();
    const day : number = date.getDay();
    const year : number = date.getFullYear();
    const hours : number = date.getHours();
    const minutes : number = date.getMinutes();
    const seconds : number = date.getSeconds();


    const formattedMonth : string = month < 10 ? `0${month}` : `${month}`;
    const formattedDay : string = day < 10 ? `0${day}` : `${day}`;
    const formattedHours : string = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes : string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds : string = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log('====================================');
    console.log(`${formattedMonth}-${formattedDay}-${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    console.log('====================================');

}

getDateAndTime();