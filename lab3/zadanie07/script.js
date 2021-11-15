function compareDentensities (city_a, city_b) {
    return city_b.dentensity - city_a.dentensity;
}

function compareNames (city_a, city_b) {
    if (city_a.name > city_b.name) {
        return 1;
    }
    else {
        return -1;
    }
}

function compareAreas (city_a, city_b) {
    return city_b.area - city_a.area;
}

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


    /* task (b) give me cities containing two characters 'a' */
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
    
    /* task (b) version 2*/
    template = cities
        .filter(city => city.name.indexOf('a') > -1)
        .map(city => city.name)
        .join(", ");
    //console.log(template);

    /* task (c) give me fith by dentensity property city */
    cities.sort(compareDentensities);
    let fith_dentensity_city = cities[4];
    cities.sort(compareNames);
    template = `${fith_dentensity_city.name}: ${fith_dentensity_city.dentensity}`;

    const fifth_dentensity_city = document.querySelector(".fifth-dentensity-city");
    fifth_dentensity_city.innerHTML = template;

    /* task (d) append '-City' for cities with people property over 100000 value */
    const big_populated_cities = document.querySelector(".big-populated-cities");
    big_populated_cities.innerHTML = cities
        .filter(city => city.people > 100000)
        .map(city => city.name + "-City")
        .join(", ");

    /* task (e) more cities with population over 80000 or with under 80000 */
    let over_populated_cities = cities
        .filter(city => city.people > 80000)
        .map(city => city.name + " " + city.people)
        .length;

    let under_populated_cities = cities
        .filter(city => city.people < 80000)
        .map(city => city.name + " " + city.people)
        .length;
    
    template = `
        Miasta powyżej 80000 mieszkańców: `
        + over_populated_cities + `<br>
        Miasta poniżej 80000 mieszkańców: `
        + under_populated_cities + `<br>`;

    template += over_populated_cities > under_populated_cities ?
        `Więcej jest miast powyżej 80000 mieszkańców`
        :
        `Więcej jest miast poniżej 80000 mieszkańców`;

    const over_or_under_populated_cities = document.querySelector(".over-or-under-populated-cities");
    over_or_under_populated_cities.innerHTML = template;

    /* task (f) give me average area of cities with first 'P' letter of township */
    let area_sum = cities
        .filter(city => city.township[0] === 'P')
        .map(city => city.area)
        .reduce( (area_a, area_b) => area_a + area_b, 0 );

    let requested_township_size = cities
        .filter(city => city.township[0] === 'P')
        .length;

    template = area_sum / requested_township_size;

    const requested_township_average_area = document.querySelector(".requested-township-average-area");
    requested_township_average_area.innerHTML = template;

    /* all cities */
    const all_cities = document.querySelector(".all-cities");
    all_cities.innerHTML = cities
        .map(city => city.name)
        .join(", ");
}

window.addEventListener("DOMContentLoaded", () => renderCities());