let mealName = '';
const main = document.querySelector("#main");
const inputText = document.getElementById('input-text')
const detailFood = document.getElementById("details-food");
// false API
const fetchApi = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayItems(data.meals))
}
// display the Items
let displayItems = items => {
    main.innerHTML = "";
    items.forEach(item => {
        setItemIntoHtml(item)
        // console.log(item);
    })
}

// showing food details on the top

const detailsFoodApi = idMeal => {
    const foodInfo = `
    <img src="${idMeal.strMealThumb
    }" alt="Girl in a jacket" width="300" height="300">
    <div class = "img-details">
        <h5>Meal: ${idMeal.strMeal}</h5>
        <h6>Tag: ${idMeal.strTags}</h6>
        <h6>Area: ${idMeal.strArea}</h6>
        <p > Category: ${idMeal.strCategory}</p>
    </div>
    `
    detailFood.innerHTML = foodInfo;
    // console.log(idMeal.strCategory);
    console.log(idMeal);
}

// set the item into html

const setItemIntoHtml = (item) => {
    // create the outer div element with class "col-lg-3"
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("col-lg-3");

    // create the inner div element with class "card"
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("card");

    // click handler for card and showing details here by clicking

    innerDiv.addEventListener("click", () => {
        detailsFoodApi(item);
        // main.innerHTML = ""
    })
    // create the image element with src "/Rectangle 68.png" and class "card-img-top"
    const image = document.createElement("img");
    image.src = item.strMealThumb;
    image.classList.add("card-img-top");
    image.alt = "...";

    // create the div element with class "card-body"
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // create the h6 element with class "card-title text-center" and text content "Tonkatsu pork"
    const h6 = document.createElement("h6");
    h6.classList.add("card-title", "text-center");
    h6.textContent = item.strMeal;

    // add the elements to the DOM
    cardBody.appendChild(h6);
    innerDiv.appendChild(image);
    innerDiv.appendChild(cardBody);
    outerDiv.appendChild(innerDiv);

    main.appendChild(outerDiv);
}

// for the search input field

const searchButton = document.getElementById('search-button');
inputText.addEventListener('keyup', () => {
    search();
})

function search() {
    mealName = inputText.value;
    fetchApi()
}



fetchApi()