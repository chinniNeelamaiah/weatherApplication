var date = new Date();
var daysInWeek=["sunday","monday","tuesday","wednesday","<b>Thursday","<b>Friday","saturday"]
var day=date.getDay();
var today = daysInWeek[day];
var hours =date.getHours();
var min =date.getMinutes();

document.getElementById("dayAndTime").innerText=(today+hours+min);

var weatherInCities = [
    {city: "hyd,telangana",climaticCondition:"sunny", temaparature:45},
    {city: "bhopal,madhyapradesh",climaticCondition:"sunny", temaparature:40},
    {city: "imphal,manipur",climaticCondition:"cloudy", temaparature:15},
    {city: "kohima,nagaland",climaticCondition:"rainy", temaparature:22},
    {city: "agarthala,tripura",climaticCondition:"humid", temaparature:20}
]

function getWeather(){
    var list=document.getElementById("list")
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climateCondition;
    document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
    document.getElementById("city").innerText=selectedCityFromList;
    document.getElementById("Latitude").innerText=weatherInSelectedCity.Latitude;
    document.getElementById("Longitude").innerText=weatherInSelectedCity.Longitude;
    document.getElementById("precipitation").innerText=weatherInSelectedCity.precipitation;
}
function getFahrenheit(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=(weatherInSelectedCity.temperature*9/5)+32;
}
function getCelsius(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
}

