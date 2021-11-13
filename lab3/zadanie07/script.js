class City {
    constructor(name)
}

const container = document.querySelector(".container");

const renderCities = async() => {
    let uri = "http://localhost:3000/cities";
    const res = await fetch(uri);
    const cities = await res.json();

    /* task (a): give me cities only from małopolskie province */
    let template = "";
    cities.forEach(city => {
        if(city.province === "małopolskie"){
            template += `${city.name}, `
        }
    });
    const requested_province = document.querySelector(".requested-province");
    requested_province.innerHTML = template;

    /* task (b) */
    template = "";
    cities.forEach(city => {
        if(city.name.indexOf('a') > -1){
            let index = city.name.indexOf('a');
            let sub_city_name = city.name.substring(index+1, city.name.length);
            if(sub_city_name.indexOf('a') > -1){
                template += `${city.name}, `
            }
        }
    })

    /*let message = "ocacurs";
    let index = message.indexOf('a');
    let short_msg = message.substring(0, message.length);
    console.log("index: " + index);
    console.log(message.length);
    console.log(short_msg);*/

    //const answer = document.querySelector(".answer");
    //answer.innerHTML = template;

    const two_a_chars_cities = document.querySelector(".two-a-chars-cities");
    two_a_chars_cities.innerHTML = template;
    
    /* task (c) */


    /* all cities */
    template = "";
    cities.forEach(city => {
        template += `${city.name}, `
    });
    const all_cities = document.querySelector(".all-cities");
    all_cities.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderCities());