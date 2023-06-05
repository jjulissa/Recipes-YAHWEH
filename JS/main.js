const main = document.querySelector(".main");
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')

  .then(response => response.json())
  .then(data => data.meals.forEach((e) => {
    const div = document.createElement('div')
    div.classList.add("cadaComida"); 
    console.log(e) 

    div.innerHTML = ` 
        <div style=" " class="containerMeals"> 
          <a href="../Page/Ingredients.html">
            <img class="imgMeal" width="100%" src="${e.strMealThumb}" alt="${e.strMeal}">
            <h1 style="color: black; text-decoration:none; list-style-type: none;" class="TitleMeal">${e.strMeal}</h1>
          </a>
        </div>`
    main.append(div)

  })); 

