const loadJSONs = async() => {
    /* load data from JSONs */
    
    let uriA = "http://localhost:3001/ProduktyA";
    const resA = await fetch(uriA);
    const productsA = await resA.json();

    let uriB = "http://localhost:3002/ProduktyB";
    const resB = await fetch(uriB);
    const productsB = await resB.json();

    let uriC = "http://localhost:3003/ProduktyC";
    const resC = await fetch(uriC);
    const productsC = await resC.json();

    /* extract categories for each products array */

    let categoriesA = productsA.map(category => Object.keys(category).toString());
    let categoriesB = productsB.map(category => Object.keys(category).toString());
    let categoriesC = productsC.map(category => Object.keys(category).toString());

    /* create array with all categories */

    var aSet = new Set(categoriesA);
    var categoriesAandB = [
        ...categoriesA,
        ...categoriesB.filter(category => !aSet.has(category.toString()))
    ];
    var aAndbSet = new Set(categoriesAandB);
    var categoriesAandBandC = [
        ...categoriesAandB,
        ...categoriesC.filter(category => !aAndbSet.has(category.toString()))
    ];

    /* merge all products to one array */

    var products = [];
    var i = 0;
    categoriesAandBandC.forEach(category => {
        const object = {};

        /* products in A,B,C from considered category */

        let categoryProductsA = [];
        let indexA = categoriesA.indexOf(category);
        if(indexA > -1){
            categoryProductsA = Object.values(productsA[indexA])[0]
                .map(product =>  Object.values(product).toString());
            //console.log(categoryProductsA);
        }
        let categoryProductsB = [];
        let indexB = categoriesB.indexOf(category);
        if(indexB > -1){
            categoryProductsB = Object.values(productsB[indexB])[0]
                .map(product => Object.values(product).toString());
            //console.log(categoryProductsB);
        }

        let categoryProductsC = [];
        let indexC = categoriesC.indexOf(category);
        if(indexC > -1){
            categoryProductsC = Object.values(productsC[indexC])[0]
                .map(product => Object.values(product).toString());
            //console.log(categoryProductsC);
        }

        /* merging products from given category to one array */

        var set1 = new Set(categoryProductsA);
        var categoryProductsAandB = [
            ...categoryProductsA,
            ...categoryProductsB.filter(cat => !set1.has(cat))
        ];
        var set2 = new Set(categoryProductsAandB);
        var categoryProducts = [
            ...categoryProductsAandB,
            ...categoryProductsC.filter(cat => !set2.has(cat))
        ];
        // console.log("Category: ");
        // console.log(category);
        // console.log(categoryProducts);

        object[category] = categoryProducts;
        products[i] = object;
        i++;
    });
    //console.log(products);
    
    const categoriesTree = document.getElementsByClassName("categories")[0];
    let template = "";
    products.forEach(category => {
        let categoryKey = Object.keys(category).toString();
        template += `
            <li>
                <div class="items-toggler" onclick="onClick(this)">${categoryKey}</div>
                <ul class="items">  
        `
        category[categoryKey].forEach(item => {
            //console.log(item)
            template += `
                <li class="item" onclick="onClickItem(this)">${item}</li>
            `
        });

        template += `
                </ul>
            </li>
        `
    });

    categoriesTree.innerHTML = template;
}

let productsArray = [];

function updateMainSection(item, addFlag){
    let template = `<ul>`;
    if(addFlag){
        productsArray.push(item);
    }
    else {
        var i = productsArray.indexOf(item);
        productsArray.splice(i, 1);
    }
    productsArray.forEach(product => {
        template += `<li>${product.textContent}</li>`;
    });
    template += `</ul>`;
    let mainSection = document.getElementsByClassName("main-section")[0];
    mainSection.innerHTML = template;
}

function onClick(itemsToggler) {
    itemsToggler.classList.toggle("active");
    itemsToggler.nextElementSibling.classList.toggle("active");
}

function onClickItem(item) {
    updateMainSection(item, item.classList.toggle("active"));
}

itemsTogglers = document.querySelectorAll(".items-toggler");

itemsTogglers.forEach(itemsToggler => 
    itemsToggler.addEventListener("click", () => { 
        onClick(itemsToggler); 
    })
);

items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", onClickItem(item));
});

window.addEventListener("DOMContentLoaded", () => loadJSONs());