const APIKEY = '30d3c028a4d92a2f368b10c547bdb5e3';

let apiCall = function(city){
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response)=> 
        response.json().then((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>'+data.main.temp + '°C';
            document.querySelector('#humidity').innerHTML = '<i class="fa-sharp fa-solid fa-droplet"></i>'+data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i>'+data.wind.speed + ' km/h';
        })
    ).catch(err => console.log('Erreur' + err));
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

apiCall("Lubumbashi");

