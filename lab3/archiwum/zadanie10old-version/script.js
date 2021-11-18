const categories = document.querySelectorAll(".category");

categories.forEach(category => {
    category.addEventListener("click", e => {
        category.classList.toggle("active");
        category.childNodes[1].classList.toggle("active");
    })
});

const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", e => {
        item.classList.toggle("active");
        toggler.nextElementSibling.classList.toggle("active");
    })
});

const loadJSONs = async() => {
    let uriA = "http://localhost:3000/ProduktyA";
    const resA = await fetch(uriA);
    const productsA = await resA.json();

    let uriB = "http://localhost:3000/ProduktyB";
    const resB = await fetch(uriB);
    const productsB = await resB.json();

    let uriC = "http://localhost:3000/ProduktyC";
    const resC = await fetch(uriC);
    const productsC = await resC.json();
}

window.addEventListener("DOMContentLoaded", () => loadJSONs());