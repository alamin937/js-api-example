const buttonArea = () =>{
    const inputArea = document.getElementById('input-area');
    const inputValue = inputArea.value;
    console.log(inputValue)

    inputArea.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealsArea(data.meals))
}

const mealsArea = meals =>{
    console.log(meals)
    const contentArea = document.getElementById('content-area')
   for(const meal of meals){
       const div = document.createElement('div');
       div.classList.add='col'
       div.innerHTML=`
       <div class="card">
       <img height='200px' src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
     </div>
    `
    contentArea.appendChild(div);
   }

}

