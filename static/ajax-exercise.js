"use strict";

// PART 1: SHOW A FORTUNE
function replaceFortune(forString) {
    let fortune = forString;
    $('#fortune-text').html(fortune);
}

function showFortune() {
    // TODO: get the fortune and show it in the #fortune-text div
    // alert("Hey this is an alert!");
    $.get('/fortune', replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function weatherForecast (results) {
    console.dir(results);
    alert("Your Forecast:" + results.forecast);

}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get("/weather.json", 
        formData,
        weatherForecast);
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS



function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


