const button= document.getElementById("search-btn")
const input= document.getElementById("city-in")
const cityName= document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getData(cityName){
    const promise =await fetch(`https://api.weatherapi.com/v1/current.json?key=40920990190e4da996d130341251105&q= ${cityName} &aqi=yes`);
    return await promise.json()

}
button.addEventListener("click",async() => {
   const value = input.value;
   const result = await getData(value);
   cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
   cityTime.innerText= result.location.localtime;
   cityTemp.innerText= result.current.temp_c;
});
