const renderCities = async() => {
    let uri = "http://localhost:3000/cities";
    const res = await fetch(uri);
    const cities = await res.json();

    /* task (a): give me cities only from małopolskie province */
    const requested_province = document.querySelector(".requested-province");
    requested_province.innerHTML = cities
        .filter(city => city.province === "małopolskie")
        .map(city => city.name)
        .join(", ");


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
    });

    const two_a_chars_cities = document.querySelector(".two-a-chars-cities");
    two_a_chars_cities.innerHTML = template;
    
    /* task (c) */
    template = "";
    let max_dentensity = 0;
    cities.forEach(city => {
        if(city.dentensity > max_dentensity){
            template = `${city.name}: ${city.dentensity}`;
        }
    });
    const max_dentensity_city = document.querySelector(".max-dentensity");
    max_dentensity_city.innerHTML = template;

    /* all cities */
    template = "";
    cities.forEach(city => {
        template += `${city.name}, `
    });
    const all_cities = document.querySelector(".all-cities");
    all_cities.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => renderCities());