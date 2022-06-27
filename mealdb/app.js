const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchInput = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealResult(data.meals))
}
searchFood()
const displayMealResult = meals => {
    const displayMeal = document.getElementById('display-meal');
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
                </div>
            </div>
        `;
        displayMeal.appendChild(div);
    });
}