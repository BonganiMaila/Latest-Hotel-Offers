/*This task is split into 2 parts

Part 1: it shows the details of the hotel, room, rate, and offer rate
*/
var hotel = {
    name: 'Bonginho',
    rate: 210,
    discountAmt: 15,
    offerPrice: function () {
        var offerRate = this.rate * ((100 - this.discountAmt) / 100);
        return offerRate;
    }
}

//get the elements to display in html
var hotelName, hotelRate, offerRateAmt;

var hotelName = document.getElementById('hotelName');
var hotelRate = document.getElementById('roomRate');
var offerRateAmt = document.getElementById('specialRate')

//Display the elements in html
hotelName.textContent = hotel.name;
hotelRate.textContent = 'R ' + hotel.rate;
offerRateAmt.textContent = 'R ' + hotel.offerPrice().toFixed(2);

/*
Part 2: It indicates when the offer expires (we work with dates, and time)
*/

var days = 7;
var expirydays = (days * 24 * 60 * 60 * 1000);
var todayDate = new Date();

var date = {
    expirydate: todayDate, // todays date + 7 days
    //setDate(date.getDate() + 7)

}


// declare the dates
var offerEnds, currentDay;

//display when the offer ends
var offerEnds = document.getElementById('offerEnds');
//var currentDay = document.getElementById('');

offerEnds.textContent = 'The offer ends on ' + date.expirydate;



