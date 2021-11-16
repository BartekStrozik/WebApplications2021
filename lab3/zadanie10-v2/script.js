const loadJSONs = async() => {
    let uriA = "http://localhost:3000/ProduktyA";
    const resA = await fetch(uriA);
    const productsA = await resA.json();

    //console.log(productsA);
    const categoriesTree = document.querySelector(".categories");
    let template = categoriesTree.innerHTML;
    productsA.forEach(category => {
        let categoryKey = Object.keys(category).toString();
        //let categoryItems = category.
        template += `
            <li>
                <div class="items-toggler">${categoryKey}</div>
                <ul class="items">  
                    <li>
                        <div class="items-toggler">Deskorolki</div>
                        <ul class="items">
                            <li class="item">Blind</li>
                            <li class="item">Blind</li>
                            <li class="item">Blind</li>
                        </ul>
                    </li>
                </ul>
            </li>
        `
    });

    categoriesTree.innerHTML = template;

    //console.log(productsA[0].Samochody[0]);

    /*let uriB = "http://localhost:3000/ProduktyB";
    const resB = await fetch(uriB);
    const productsB = await resB.json();

    let uriC = "http://localhost:3000/ProduktyC";
    const resC = await fetch(uriC);
    const productsC = await resC.json();*/
}

window.addEventListener("DOMContentLoaded", () => loadJSONs());

itemsTogglers = document.querySelectorAll(".items-toggler");

itemsTogglers.forEach(itemsToggler => {
     itemsToggler.addEventListener("click", () => {
        itemsToggler.classList.toggle("active");
        itemsToggler.nextElementSibling.classList.toggle("active");
    })
});

items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    })
});