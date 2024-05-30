/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */

function getCurrentDateAndTime() {
    const date = new Date();

    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const formattedMonth = month < 10 ? `0${month}` : `${month}`
    const formattedDay = day < 10 ? `0${day}` : `${day}`
    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`
    const formattedSecond = second < 10 ? `0${second}` : `${second}`

    console.log(`${formattedMonth}-${formattedDay}-${year} ${formattedHour}:${formattedMinute} ${formattedSecond}`);
}

getCurrentDateAndTime();